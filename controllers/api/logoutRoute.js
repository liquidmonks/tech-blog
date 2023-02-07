const router = require("express").Router();
const { User } = require("../../models");

router.post("/", (req, res) => {
  if (req.session.logged_in) {
    // Destroy session data if user is logged in
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// Export routes for server.js to use.
module.exports = router;
