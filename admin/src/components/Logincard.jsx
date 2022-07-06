import React from "react";
import "./Logincard.css";

function logincard() {
  return (
    <div class="login-box">
      <div class="card-heading">
      <h2>Login with your Email id & Password</h2>
      </div>
      <form>
        <div class="user-box">
          <label></label>
          <input
            type="email"
            name=""
            required
            placeholder="Enter your Email"
          />
        </div>
        <div class="user-box">
          <input type="text" name="" required placeholder="Password" />
        </div>
          <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
          </button>
      </form>
    </div>
  );
}

export default logincard;
