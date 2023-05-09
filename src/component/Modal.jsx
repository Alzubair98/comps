import React from "react";
import Button from "./Button";
import ReactDOM from "react-dom";

const Modal = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-white rounded ">
        im a modal{" "}
        <Button
          onClick={() => {
            onClose(false);
          }}
          danger
          rounded
        >
          close the modal
        </Button>
      </div>
    </div>,

    document.querySelector(".modal-container")
  );
};

export default Modal;
