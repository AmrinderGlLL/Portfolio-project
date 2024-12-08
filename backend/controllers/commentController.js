const Comment = require("../models/Comment");


const addComment = async (req, res) => {
  try {
    const { name, comment } = req.body;
    const newComment = new Comment({ name, comment });
    await newComment.save();
    res.status(201).json({ message: "Comment added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};


module.exports = { addComment};
