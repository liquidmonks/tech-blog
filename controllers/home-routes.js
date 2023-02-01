// Initialize Product model (table) by extending off Sequelize's Model class
const router = require("express").Router();
const { User, Post, Comment } = require("../models");

// Import custom middleware
const withAuth = require("../utils/auth");
const moment = require("moment");

// GET all posts for homepage
router.get("/", async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      limit: 50,
      include: [{ model: User }],
      order: [["createdAt", "DESC"]],
    });

    // Serialize data so the template can read it
    const posts = dbPostData.map((element) => element.get({ plain: true }));

    // Pass serialized data and session flag into template
    posts.forEach((element) => {
      element.createdAt = moment(new Date(element.createdAt).toISOString()).format("M/D/YYYY");
    });

    res.render("homepage", {
      posts: posts,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET single post
router.get("/post/:id", async (req, res) => {
  try {
    const dbPostData = await Post.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        { model: User },
        {
          model: Comment,
          include: [{ model: User }],
        },
      ],
    });
    if (!dbPostData) {
      res.status(400).json({ messgae: "post does not exsist" });
    }

    // Serialize data so the template can read it
    const post = dbPostData.get({ plain: true });

    // Pass serialized data and session flag into template
    post.createdAt = moment(new Date(post.createdAt).toISOString()).format("M/D/YYYY");

    // Pass serialized data and session flag into template
    post.comments.forEach((element) => {
      element.createdAt = moment(new Date(element.createdAt).toISOString()).format("M/D/YYYY");
    });

    // Pass serialized data and session flag into template
    res.render("post", { post: post, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

//
router.get("/dashboard", withAuth, async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  try {
    const dbPostData = await Post.findAll({
      limit: 50,
      where: {
        user_id: req.session.user_id,
      },
      include: [{ model: User }],
      order: [["createdAt", "DESC"]],
    });

    // Serialize data so the template can read it
    const posts = dbPostData.map((element) => element.get({ plain: true }));

    // Pass serialized data and session flag into template
    posts.forEach((element) => {
      element.createdAt = moment(new Date(posts[0].createdAt).toISOString()).format("M/D/YYYY");
    });

    // Pass serialized data and session flag into template
    res.render("dashboard", { posts: posts, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
