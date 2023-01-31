// Import the functions you need from the SDKs you need

const router = require("express").Router();

// Import the models you need from the SDKs you need
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes.js");

// Create your routes here
router.use("/", homeRoutes);
router.use("/api", apiRoutes);

// Export routes for server.js to use.
module.exports = router;
