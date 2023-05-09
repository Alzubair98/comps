import React, { useState } from "react";
import Modal from "../component/Modal";
import Button from "../component/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
        primary
        rounded
      >
        Open Modal
      </Button>
      {showModal && <Modal />}
    </div>
  );
};

export default ModalPage;
