const User = require('../models/User');
const saveImage = require('../utils/saveImage');
const sendEmail = require('../utils/email');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const { compare } = require('bcrypt');

exports.verifyToken = async (req, res, next) => {
  console.log(req.cookies);
  const token = req.cookies.jwt;
  console.log(token);
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId; // Assuming the JWT contains a userId field

    const holdingUser = await User.findOne({ _id: userId });

    if (holdingUser) {
      req.user = holdingUser; // Attach the user object to the request
      next();
    } else {
      res.status(400).send('Invalid token.');
    }
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
};

function generateVerificationToken() {
  return crypto.randomBytes(20).toString('hex');
}

function checkTokenValidity(req, verificationToken) {
  if (!verificationToken) {
    return 'DEFINED=Invalid-Token 400';
  }

  const creationTime = req.body.creationTime;
  const currentTime = Date.now();
  const expirationDuration = 10 * 60 * 1000;
  const timeDifference = currentTime - creationTime;

  if (timeDifference > expirationDuration) {
    return 'DEFINED=Token-Expired 400';
  }

  return true;
}

function signToken(userId) {
  const payload = { userId };
  const secretKey = process.env.SECRET_KEY;
  const options = {
    expiresIn: '30d',
  };
  return jwt.sign(payload, secretKey, options);
}

function signCookie(req, res, token, expirationDuration) {
  console.log('Here we are signing cookie');
  res.cookie('jwt', token, {
    // expires: new Date(expirationDuration),
    maxAge: new Date() * 0.001 + 300,
    httpOnly: true,
    // secure: req.secure || req.headers['x-forwarded-proto'] === 'https',
    // sameSite: 'None', // Set sameSite attribute to 'None'
    // secure: true, // Set secure attribute to true
  });
}

exports.handleLogin = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      status: 'fail',
      message: 'Please provide email and password!',
    });
  }

  const user = await User.findOne({
    $or: [{ active: 'active' }, { active: 'deactivated' }],
    email: req.body.email,
  });

  if (!user) {
    return res.status(400).json({
      status: 'fail',
      message: 'User not found!',
    });
  }

  if (user.active === 'deactivated') {
    user.active = 'active';
    await user.save();
  }

  if (user && (await compare(req.body.password, user.password))) {
    const token = signToken(user._id);
    signCookie(req, res, token, Date.now() + 30 * 24 * 60 * 60 * 1000);

    return res.status(200).json({
      status: 'success',
      token: token,
      user: user,
    });
  }

  return res.status(400).json({
    status: 'fail',
    message: 'Invalid email or password!',
  });
};

exports.handleLogout = async (req, res) => {
  res.clearCookie('jwt');
  res.status(200).json({
    status: 'success',
    message: 'Logged out successfully',
  });
};

exports.handleSignup = async (req, res) => {
  const {
    firstName,
    lastName,
    email,
    username,
    bio,
    password,
    passwordConfirmation,
    language,
    theme,
    mode,
  } = req.body;

  let activeUser = await User.findOne({
    email: req.body.email,
    active: 'active',
  });

  if (activeUser) {
    return res.status(400).json({
      status: 'fail',
      message: 'This user already exists!',
    });
  }

  let holdingUser = await User.findOne({
    email: req.body.email,
    active: 'holding',
  });

  if (holdingUser) {
    await User.findOneAndDelete({ email });
  }
  const verificationToken = generateVerificationToken();

  holdingUser = await User.create({
    firstName,
    lastName,
    username,
    email,
    password,
    passwordConfirmation,
    bio,
    preferredLanguage: language,
    preferredTheme: theme,
    preferredMode: mode,
    profilePicture: req.file
      ? `profilePicture-${req.body.username}.jpeg`
      : 'default.jpeg',
    active: 'holding',
    token: verificationToken,
  });

  await sendEmail(email, {
    firstName: firstName,
    subject: 'Account Verification',
    content: 'Please verify your account by clicking the link below:',
    url: 'http://localhost:8000/v1/auth/verifyAccount',
    token: verificationToken,
    creationTime: Date.now(),
    email: email,
    method: 'POST',
  });

  if (req.file) {
    // prettier-ignore
    await saveImage(req, 200, 200, 90, `images/profilePicture-${holdingUser.username}.jpeg`);
  }

  res.status(201).json({
    status: 'Email Sent successfully',
  });
};

exports.handleAccountVerification = async (req, res) => {
  console.log('Here we are');
  const verificationToken = req.body.token;
  const tokenValidity = checkTokenValidity(req, verificationToken);
  if (tokenValidity !== true) {
    return res.status(400).json({
      status: 'fail',
      message: 'Token Expired',
    });
  }

  const user = await User.findOne({
    token: verificationToken,
  });

  if (user) {
    user.active = 'active';
    user.token = null;
    await user.save();

    return res.status(200).json({
      status: 'success',
      message: 'Please Login using your newly verified email',
    });
  }
};

exports.handleForgetPassword = async (req, res) => {
  const email = req.body.email;
  const user = await User.findOne({ active: 'active', email: email });

  if (!user) {
    return res.status(400).json({
      status: 'fail',
      message: 'User not found',
    });
  }

  const verificationToken = generateVerificationToken();

  user.token = verificationToken;

  await user.save();

  await sendEmail(email, {
    firstName: firstName,
    subject: 'Password Reset',
    content: 'Please Reset your account by clicking the link below:',
    url: `http://localhost:9000/resetPassword?token=${verificationToken}`,
    token: verificationToken,
    creationTime: Date.now(),
    email: email,
    method: 'GET',
  });

  // const email = new Email(
  //   user,
  //   `http://localhost:8000/auth/resetPassword}`,
  //   verificationToken
  // );

  // email.send('change', 'Change Password');

  res.status(200).json({
    status: 'successfull',
    message: 'email sent successfully to change password',
  });
};

exports.getCurrentUser = async (req, res) => {
  const token = req.cookies.jwt;
  console.log(token);
  if (!token) {
    return res.status(401).send('Access denied. No token provided.');
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const userId = decoded.userId; // Attach user info to the request
    const activeUser = await User.findOne({
      _id: userId,
    });

    return res.status(200).json({
      status: 'success',
      data: activeUser,
    });
  } catch (e) {
    console.log(e);
  }
};

