"use client";

import Modal from "@/components/atoms/Modal/Modal";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AdsModalProps } from "./AdsModal.interfaces";

function AdsModal({ image, show = false }: AdsModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(show);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (show) {
      setIsModalOpen(true);
    }
  }, [show]);

  return (
    <Modal isOpen={isModalOpen} onClose={closeModal}>
      <Image src={image} width={650} height={650} alt='Testing image' />
    </Modal>
  );
}

export default AdsModal;
