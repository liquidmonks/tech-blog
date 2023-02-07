const router = require("express").Router();
const { response } = require("express");
const { User } = require("../../models");

router.post("/", async (req, res) => {
  // Validate request if logged in
  const findUser = await User.findOne({ where: { user_name: req.body.user_name } });

  // If user exists send error message to user
  if (findUser) {
    res.status(400).json({ message: "Sorry, this username is already taken. Sign in if this username belongs to you or register a new username." });
    return;
  }

  try {
    const user = await User.create({
      user_name: req.body.user_name,
      password: req.body.password,
    });

    // Send success message to user
    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      res.status(200).json(user);
    });

    // Error handling
  } catch (error) {
    res.status(500).json(error);
  }
});

// Export routes for server.js to use.
module.exports = router;
