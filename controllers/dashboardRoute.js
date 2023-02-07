const router = require("express").Router();
const { User, Post, Comment } = require("../models");
const auth = require("../utils/auth");

router.get("/", async (req, res) => {
  // get all users
  try {
    const user = await Post.findAll({
      // get all posts
      where: {
        user_id: req.session.user_id, // get all posts for current user
      },
      include: [
        // get all comments
        {
          model: Comment, // get all comments
          include: {
            model: User,
            attributes: ["user_name"], // get all comments for current user
          },
        },
      ],
    });

    const userPosts = user.map((post) => post.get({ plain: true })); // get all posts for current user
    // res.status(200).json({userPosts})
    res.render("dashboard", {
      userPosts, //
      logged_in: req.session.logged_in, // check if user is logged in
    });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // get single user
  try {
    const post = await Post.findByPk(req.params.id, {
      // get single post
      include: [
        {
          model: Comment, // get all comments
          include: {
            model: User, //
            attributes: ["user_name"], //
          },
        },
        {
          model: User, // get all users
          attributes: ["user_name"],
        },
      ],
    });

    const editPost = post.get({ plain: true });
    // res.status(200).json({editPost})
    res.render("editDeletePost", {
      editPost,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    // get single post
    console.error(err);
    res.status(400).json(err);
  }
});

module.exports = router; // export the router
