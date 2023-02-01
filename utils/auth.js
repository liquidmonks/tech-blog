// Pass serialized data and session flag into template
const auth = (req, res, next) => {
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

// Export the middleware
module.exports = auth;
