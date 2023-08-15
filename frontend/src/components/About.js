import React from "react";

const About = () => {
  return (
    <div className="container mt-5">
      <h1>About Foodie App</h1>
      <p>
        Welcome to Foodie App, your one-stop destination for discovering and
        exploring delicious recipes from around the world. Our mission is to
        bring the joy of cooking and the pleasure of savoring scrumptious dishes
        right to your fingertips.
      </p>
      <p>
        Whether you're a seasoned chef or a cooking enthusiast, Foodie App has a
        wide range of recipes to suit your taste buds. From quick and easy
        weekday meals to indulgent weekend treats, our curated collection has it
        all.
      </p>
      <p>
        Our team of passionate food enthusiasts is dedicated to bringing you the
        best culinary experiences. We believe that cooking is an art, and every
        recipe is a canvas waiting to be explored. Join us on this gastronomic
        journey and unleash your creativity in the kitchen!
      </p>
      <h2>Connect With Us</h2>
      <p>
        Stay updated with our latest recipes and culinary adventures by
        following us on social media:
      </p>
      <div className="social-links">
        <a
          href="https://www.facebook.com/FoodieApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <br></br>
        <a
          href="https://www.twitter.com/FoodieApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <br></br>
        <a
          href="https://www.instagram.com/FoodieApp"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        <br></br>
      </div>
    </div>
  );
};

export default About;
