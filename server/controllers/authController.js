exports.handleSignup = (req, res, next) => {
  res.status(201).json({
    status: 'success',
    message: 'Signup successful',
    data: {
      user: {
        id: 1,
        name: 'John Doe',
        email: '',
      },
    },
  });
};

