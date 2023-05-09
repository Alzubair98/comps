import React from "react";
import Button from "./Button";

const Modal = ({ onClose }) => {
  return (
    <div>
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
  );
};

export default Modal;
