// Create all our routes and set up logic within those routes where required.
const router = require("express").Router();
const { User, Post, Comment } = require("../../models/Post");

// The `/api/users` endpoint
router.post("/create", async (req, res) => {
  console.log("hang-on");

  try {
    const dbPostData = await Post.create({
      // create a new post
      title: req.body.title,
      content: req.body.content,
      user_id: req.session.user_id,
    });
    console.log("post is created");
    res.status(200).json({ message: "post is created" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// The `/api/users` endpoint
module.exports = router;
