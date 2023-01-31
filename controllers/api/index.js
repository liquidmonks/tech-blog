// Export routes for server.js to use.
const router = require("express").Router();

// Import the model controller api files to use its database functions.
const userRoutes = require("./user-routes");
const postRoutes = require("./post-routes");

// Create all our routes and set up logic within those routes where required.
router.use("/users", userRoutes);
router.use("/post", postRoutes);

// Export routes for server.js to use.
module.exports = router;
