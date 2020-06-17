import React, { useState, useCallback, useEffect } from 'react';
import { Container, DialogContainer } from './styles';
import { DialogProps } from './types';

const Dialog: React.FC<DialogProps> = ({ message, open, onClose }) => {
  const [hidden, setHidden] = useState<boolean>(true);

  useEffect(() => {
    setHidden(!open);
  }, [open]);

  const handleClose = useCallback(() => {
    setHidden(true);
    onClose();
  }, [onClose]);

  return (
    <>
      <Container onClick={handleClose} hidden={hidden} />
      <DialogContainer hidden={hidden}>
        <strong>{message}</strong>
      </DialogContainer>
    </>
  );
};

export default Dialog;
