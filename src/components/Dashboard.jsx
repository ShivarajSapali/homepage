import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <main className="main">
      <div className="main-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="main-buttons">
          <button className="primary-btn">Shop now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="main-shopping">
          <p>Also available on</p>
          <div className="shop-icons">
            <img src="/images/flipkart.png" alt="flipkart-logo"></img>
            <img src="/images/amazon.png" alt="amazon-logo"></img>
          </div>
        </div>
      </div>
      <div className="main-image">
        <img src="/images/shoe_image.png" alt="shoe-image"></img>
      </div>
    </main>
  );
};

export default Dashboard;
