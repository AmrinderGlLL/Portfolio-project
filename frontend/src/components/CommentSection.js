
import React, { useState } from "react";
import axios from "axios";
import "../styles/CommentSection.css";

const CommentSection = () => {
  const [newComment, setNewComment] = useState({ name: "", comment: "" });
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/comments", newComment);
      setSuccessMessage("Thank you for your comment!");
      setNewComment({ name: "", comment: "" });
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="comment-section">
      <h2>Leave a Comment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={newComment.name}
          onChange={(e) => setNewComment({ ...newComment, name: e.target.value })}
          required
        />
        <textarea
          placeholder="Your Comment"
          value={newComment.comment}
          onChange={(e) =>
            setNewComment({ ...newComment, comment: e.target.value })
          }
          required
        />
        <button type="submit">Submit</button>
      </form>
      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

export default CommentSection;
