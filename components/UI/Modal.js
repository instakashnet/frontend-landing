import React from "react";
import Modal from "react-modal";
import { XCircle } from "react-feather";

Modal.setAppElement("div");

export const BaseModal = ({ children, onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="custom-modal modal-background">
      <div className="modal-content">
        <button onClick={onClose} className="close-modal">
          <XCircle size={35} />
        </button>
        {children}
      </div>
    </Modal>
  );
};
