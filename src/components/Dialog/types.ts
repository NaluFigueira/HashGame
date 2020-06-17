export interface DialogProps {
  message: string;
  open: boolean;
  onClose(): void;
}
