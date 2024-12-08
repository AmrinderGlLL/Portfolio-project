import React from "react";
import "../styles/About.css";

const About = () => (
  <div className="about-container">
    <h2>About Me</h2>
    <p>
      Hey there! I’m Amrinder Singh, a curious soul always eager to learn something new. Here’s a little glimpse into who I am and what makes me tick.
    </p>
    <section className="about-section">
      <h3>Hobbies</h3>
      <p>
        I absolutely love watching movies, especially those with top-notch ratings and stunning cinematography. There’s something magical about the way a well-made movie can tell a story visually. On the other hand, when I’m in the mood for some quiet time, I turn to books. I’m not a voracious reader, but when a good story or an insightful read comes my way, I’m all in. It’s like diving into another world without leaving your chair.
      </p>
    </section>
    <section className="about-section">
      <h3>Interests</h3>
      <p>
        Lately, I’ve been diving into Machine Learning (ML) and Artificial Intelligence (AI). It’s such a massive field, and honestly, I’m just trying to wrap my head around the basics right now. But it’s so fascinating! I’ve had the chance to work on two research projects, both centered around ML. One was about creating a hybrid Intrusion Detection System to boost cybersecurity, and the other involved building a deep learning model to detect hemorrhages in medical images. It was challenging, but I learned so much along the way, and it sparked a deeper passion for tech.
      </p>
      <p>
        Another thing I’m really into is traveling and exploring historic places. I love wandering around ancient sites, soaking in their stories, and imagining what life was like back then. There’s something incredibly humbling and inspiring about seeing how history has shaped the present.
      </p>
    </section>
  </div>
);

export default About;
