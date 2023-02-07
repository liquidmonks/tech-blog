const router = require("express").Router();
const { Comment } = require("../../models");

router.post("/:id", async (req, res) => {
  // add comment to post
  try {
    const message = await Comment.create({
      //
      ...req.body,
      post_id: req.params.id,
      user_id: req.session.user_id,
    });
    res.json({ message });
  } catch (err) {
    res.status(500).json(err); // if there is an error, send it back to the client
  }
});

module.exports = router; // exporting the router
