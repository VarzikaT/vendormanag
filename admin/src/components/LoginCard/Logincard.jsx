import React from "react";
import "./Logincard.css";
import { Link } from "react-router-dom";

function logincard() {
  return (
    <div class="login-box">
      <div class="card-heading">
        <h2>Login</h2>
      </div>
      <form>
        <div class="user-box">
          <label></label>
          <input type="email" name="" required placeholder="Enter your Email" />
        </div>
        <div class="user-box">
          <input type="text" name="" required placeholder="Password" />
        </div>
        <Link to="/home">
          <div className="login-btn">
            <button>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign in
            </button>
          </div>
        </Link>
      </form>
    </div>
  );
}

export default logincard;
