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
      {showModal && (
        <Modal
          actionBar={
            <Button onClick={onClose} danger rounded>
              Close
            </Button>
          }
          onClose={onClose}
        >
          <p>im testing this as a children of this modal</p>
        </Modal>
      )}
    </div>
  );
};

export default ModalPage;
