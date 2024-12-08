import React from "react";
import CommentSection from "./CommentSection";
import "../styles/Home.css";
import image from "../Images/Amrinder_Singh_headshot.jpg";

const Home = () => (
  <div className="home-container">
    <h1>Welcome to My Portfolio</h1>
    <img src={image} />
    <p>Hello! My name is Amrinder Singh</p>
    <p>
      I am a junior studying Computer Science.
      Originally from Punjab, India, I am fluent in three languages and have a deep
      passion for exploring emerging technologies. Currently, I am focused on 
      developing my expertise in Machine Learning and its exciting applications.
    </p>
    <CommentSection />
  </div>
);

export default Home;
