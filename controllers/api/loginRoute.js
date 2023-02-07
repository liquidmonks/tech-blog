const router = require("express").Router();
const { User } = require("../../models");

router.post("/", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userCheck = await User.findOne({ where: { user_name: req.body.user_name } });

    // Check if user exists
    if (!userCheck) {
      res.status(400).json({ message: "Incorrect username or password, please try again" });
      return;
    }

    // Check if password matches
    const validPassword = await userCheck.checkPw(req.body.password);

    // If password doesn't match, send error message
    if (!validPassword) {
      res.status(401).json({ message: "Incorrect password, please try again" });
      return;
    }

    // Logged in successfully, create session
    req.session.save(() => {
      req.session.user_id = userCheck.id;
      req.session.logged_in = true;

      res.json({ user: userCheck, message: "You are logged in" });
    });
  } catch (error) {
    res.status(500).json({ error: error, message: "Something went wrong." });
    console.log(error);
  }
});

// Logout route for logging out
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    // Destroy session if user is logged in
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Export router
module.exports = router;
