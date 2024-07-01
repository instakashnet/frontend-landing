import ReactModal from "react-modal";
import { ModalProps } from "./Modal.interfaces";
import styles from "./Modal.module.css";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";

function Modal({ isOpen, onClose, children, className }: ModalProps & ReactModal.Props) {
  const [opened, setOpened] = useState(true);

  return (
    // <ReactModal
    //   isOpen={isOpen}
    //   onRequestClose={onClose}
    //   className={styles.Modal}
    //   overlayClassName={styles.Overlay}
    //   contentLabel='Example Modal'
    // >
    //   <button className='bg-none absolute top-4 right-4 text-white hover:text-white/70 transition-all' onClick={onClose}>
    //     <XIcon className='w-8 h-8' />
    //   </button>
    //   {children}
    // </ReactModal>
    <Dialog open={opened} onOpenChange={setOpened}>
      <DialogContent className='p-0'>{children}</DialogContent>
    </Dialog>
  );
}

export default Modal;
