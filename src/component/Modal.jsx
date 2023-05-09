import React from "react";
import Button from "./Button";

const Modal = ({ onClose }) => {
  return (
    <div>
      <div className="absolute inset-0 bg-gray-300 opacity-80"></div>
      <div className="absolute inset-40 p-10 bg-white ">
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
    </div>
  );
};

export default Modal;
