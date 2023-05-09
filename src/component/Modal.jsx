import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ onClose, children, actionBar }) => {
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 p-10 bg-white rounded">
        <div className="flex ">{children}</div>
        <div className="flex justify-end">{actionBar}</div>
      </div>
    </div>,

    document.querySelector(".modal-container")
  );
};

export default Modal;
