import React from "react";
import "./About.css";

function AboutUs() {
  return (
    <div className="ourStory containerFluid">
      <h1 className="abtUs-header">Our Story</h1>
      <p className="abtUs-text">
        <em style={{ color: " #900c3f" }}>Spice Life Indian Fare</em> is located
        in Gaithersburg, Maryland. We offer our patrons with a convineint and
        quality dinning experience. Eat with us once and, you would want to come
        again. We proudly serve exquisite and authentic Indian cuisine that
        would spice your life.
      </p>
      <p className="abtUs-text">
        We guarantee that our savory dishes will win your heart. We serve fresh
        Appetizers, Vindaloos, various kinds of Curry and Breads, Desserts. Our
        specialty is the South Indian Dosa as well as everyone's favorite
        Chicken Tikka Masala.
      </p>
    </div>
  );
}

export default AboutUs;
