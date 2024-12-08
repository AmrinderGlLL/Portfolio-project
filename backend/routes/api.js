const express = require("express");
const router = express.Router();
const { addComment, getComments } = require("../controllers/commentController");

// Define routes
router.post("/comments", addComment); 

module.exports = router;
