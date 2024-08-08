import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import css from './ModalAdvert.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onModalClose, children }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onModalClose();
    }
  };

  return createPortal(
    <div className={css.modal_overlay} onClick={handleBackdropClick}>
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
