
import React from "react";
import "./Home.css";
import Modal from "../components/Modal/Modal";

function Home() {
  return (
    <div className="changes">
        <nav id="navbar">
          <ul class="menu">
            <li id="logo">
              <p>Logo</p>
            </li>
            <li
              id="trigram"
              tabindex="-1"
              title="CLICK ME!&#10I WORK WITHOUT JS :)"
            >
              <div>&#9776</div>
            </li>
            <span id="responsive-menu">
              <ul class="menu">
                <li class="menu-option">
                  <p>Home</p> 
                </li>
                <li class="menu-option">
                  <p>
                    Our Products <strong></strong>
                  </p>
                  <ul id="products">
                    <li>A</li>
                    <li>B</li>
                    <li>Others</li>
                  </ul>
                </li>
                <li class="menu-option">
                  <p>About us</p>
                </li>
                <li class="menu-option">
                  <p>Suport</p>
                </li>
                <li id="sign-in">
                  <p>Other User</p>
                </li>
                <li id="sign-up">
                  <p>Log out</p>
                </li>
              </ul>
            </span>
          </ul>
        </nav>
        <div className="home-modal">
          <Modal/>
        </div>
      </div>
  );
}

export default Home;
