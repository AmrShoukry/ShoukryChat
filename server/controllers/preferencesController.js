exports.handleMode = async (req, res) => {
  try {
    const user = req.user; // Retrieve the user from the request object
    const newMode = req.body.mode; // Get the new mode from the request body

    user.preferredMode = newMode;
    await user.save();

    // Return the updated user data
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    console.error('Error updating mode:', error);
    res.status(500).send('An error occurred while updating the mode.');
  }
};

exports.handleTheme = async (req, res) => {
  try {
    const user = req.user; // Retrieve the user from the request object
    const newTheme = req.body.theme; // Get the new mode from the request body

    user.preferredTheme = newTheme;
    await user.save();

    // Return the updated user data
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    console.error('Error updating mode:', error);
    res.status(500).send('An error occurred while updating the mode.');
  }
};

exports.handleLanguage = async (req, res) => {
  try {
    const user = req.user; // Retrieve the user from the request object
    const newLanguage = req.body.language; // Get the new mode from the request body

    user.preferredLanguage = newLanguage;
    await user.save();

    // Return the updated user data
    res.status(200).json({
      status: 'success',
      data: user,
    });
  } catch (error) {
    console.error('Error updating mode:', error);
    res.status(500).send('An error occurred while updating the mode.');
  }
};

