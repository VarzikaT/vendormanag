import React from "react";
import "./Modal.css";
import Form from "./Form";
import { Link } from "react-router-dom";

function Modal() {
  return (
    <>
      <div class="modal-container">
        <div class="interior">
          <a class="modal-btn" href="#open-modal">
            Register Vendor!!!
          </a>
          <br />
        </div>
      </div>
      <div id="open-modal" class="modal-window">
        <div>
          <a href="" title="Close" class="modal-close">
            Close
          </a>
          <div>
            <Form />
          </div>
          <br />
          
            <div className="modal-btn-container">
              <button className="modal-submit-btn" onClick={() => window.location.href = "/home"} >Submit</button>
            </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
