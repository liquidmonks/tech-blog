// Global controller route variables
const router = require("express").Router();
const loginRoute = require("./loginRoute");
const logoutRoute = require("./logoutRoute");
const postRoute = require("./postRoute");
const signupRoute = require("./signupRoute");
const commentRoute = require("./commentRoute");

// Controller api routes
router.use("/login", loginRoute);
router.use("/logout", logoutRoute);
router.use("/post", postRoute);
router.use("/signup", signupRoute);
router.use("/comment", commentRoute);

// Export the router
module.exports = router;
