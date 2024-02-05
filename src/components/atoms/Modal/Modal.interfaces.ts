export interface ModalProps {
  title?: string;
  trigger?: React.ReactNode;
  isOpen: boolean;
  children: React.ReactNode;
  onClose?: () => void;
  actionButtons?: React.ReactNode[];
  className?: string;
}
