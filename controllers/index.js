const router = require("express").Router();
const apiRoutes = require("./api");
const homeRoute = require("./homeRoute.js");
const dashboardRoute = require("./dashboardRoute.js");

// API Routes from /api directory
router.use("/", homeRoute);
router.use("/dashboard", dashboardRoute);
router.use("/api", apiRoutes);

// Export routes for server.js to use.
module.exports = router;
