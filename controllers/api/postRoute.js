const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const postedData = await Post.findAll({
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
            },
          ],
        },
      ],
    });
    const posts = postedData.map((post) => post.get({ plain: true }));

    res.status(200).json({ posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one post from database
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: [
        {
          model: Comment,
          include: [
            {
              model: User,
            },
          ],
        },
      ],
    });
    const singlePost = post.get({ plain: true });
    res.status(200).json({ singlePost });
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

// Create a post in database
router.post("/", async (req, res) => {
  try {
    const post = await Post.create({
      title: req.body.title,
      contents: req.body.contents,
      user_id: req.session.user_id,
    });
    res.status(200).json({ post, message: `Post Created` });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update a post in the database
router.put("/:id", async (req, res) => {
  try {
    const updatePost = await Post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(updatePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete post from database
router.delete("/:id", async (req, res) => {
  try {
    const delPost = await Post.destroy({ where: { id: req.params.id } });
    res.status(200).json(delPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Export router
module.exports = router;
