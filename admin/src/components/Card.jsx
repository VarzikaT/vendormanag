import React from "react";
import "./Card.css";

function Card() {
  return (
    <div class="card-category-1">
      <div class="basic-card basic-card-aqua">
        <div class="card-content">
          <span class="card-title">Admin Portal</span>
          <p class="card-text">Welcome to the Portal!</p>
        </div>
        <div class="card-link">
          <a href=" " title="Read Full">
            <button className="card-btn" >Login as Admin</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
