import React from "react";
import Photo from "../Untitled design.png";
import Photo1 from "../Untitled design (1).png";
import Photo2 from "../Untitled design (2).png";
import Photo3 from "../Untitled design (3).png";
import Photo4 from "../Untitled design (4).png";
import Photo5 from "../Untitled design (5).png";
import "./Home.css";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6">
          <h1>Welcome to Foodie App</h1>
          <p>Embark on a captivating culinary journey with Foodie App. Our platform invites you to explore an extensive collection of mouth-watering recipes from around the world. Whether you're a seasoned chef or an enthusiastic home cook, our curated selection caters to all skill levels and tastes.</p>
          <button className="btn btn-primary">Explore Recipes</button>
        </div>
        <div className="col-lg-6 d-flex justify-content-end">
          <img src={Photo} alt="Delicious Food" className="img-fluid rounded" />
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card hover-card"> 
            <img
              src={Photo1}
              alt="Pasta Recipe"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Delicious Pasta</h5>
              <p className="card-text">
                Explore mouth-watering pasta recipes. From classic carbonara to creamy Alfredo.
              </p>
              <button className="btn btn-primary">Try</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card hover-card">
            <img
              src={Photo2}
              alt="Burger Recipe"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Tasty Burgers</h5>
              <p className="card-text">
                Dive into juicy burger recipes. From classic beef to vegetarian alternatives.
              </p>
              <button className="btn btn-primary">Try</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card hover-card">
            <img
              src={Photo3}
              alt="Dessert Recipe"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">Exotic Desserts</h5>
              <p className="card-text">
                Indulge in heavenly dessert recipes. From decadent chocolate to refreshing fruit.
              </p>
              <button className="btn btn-primary">Try</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="card hover-card">
            <div className="card-img-top veg-img">
              <img
                src={Photo4}
                alt="Vegetarian Recipe"
                className="img-fluid"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Explore Vegetarian Recipes</h5>
              <p className="card-text">
                Discover a variety of delicious and nutritious vegetarian dishes.
              </p>
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card hover-card">
            <div className="card-img-top non-veg-img">
              <img
                src={Photo5}
                alt="Non Vegetarian Recipe"
                className="img-fluid"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">Explore Non-Vegetarian Recipes</h5>
              <p className="card-text">
                Savor the flavors of our delectable non-vegetarian recipes.
              </p>
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;