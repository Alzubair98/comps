import React, { useState } from "react";
import Modal from "../component/Modal";
import Button from "../component/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        primary
        rounded
      >
        Open Modal
      </Button>
      {showModal && <Modal onClose={onClose} />}
    </div>
  );
};

export default ModalPage;
