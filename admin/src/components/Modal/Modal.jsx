import React from "react";
import "./Modal.css";

function Modal() {
  return (
    <>
      <div class="modal-container">
        <div class="interior">
          <a class="modal-btn" href="#open-modal">
            👋 Basic CSS-Only Modal
          </a>
        </div>
      </div>
      <div id="open-modal" class="modal-window">
        <div>
          <a href="" title="Close" class="modal-close">
            Close
          </a>
          <h1>Voilà!</h1>
          <div>
            A CSS-only modal based on the :target pseudo-class. Hope you find it
            helpful.
          </div>
          <br />
          Your new favorite eyedropper tool!
        </div>
      </div>
    </>
  );
}

export default Modal;
