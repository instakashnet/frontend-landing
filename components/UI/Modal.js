import React from "react";
import { XCircle } from "react-feather";
import Modal from "react-modal";

Modal.setAppElement("div");

export const BaseModal = ({ children, onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="custom-modal modal-background">
      <div className="modal-content">
        <button onClick={onClose} className="close-modal">
          <XCircle size={33} />
        </button>
        {children}
      </div>
    </Modal>
  );
};
