const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const auth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const posted = await Post.findAll({
      include: [{ model: User }],
    });
    const posts = posted.map((post) => post.get({ plain: true }));
    // Render the homepage
    res.render("home", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});
// Sign up route
router.get("/signup", (req, res) => {
  try {
    res.render("signUp");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Get post from database with id and render it
router.get("/post/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["user_name"],
            },
          ],
        },
      ],
    });
    // Get the post data from the database
    const singlePost = post.get({ plain: true });
    // Render the single post page
    res.render("post", {
      singlePost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: err, message: "Something went wrong." });
  }
});

// Export routes for server.js to use.
module.exports = router;
