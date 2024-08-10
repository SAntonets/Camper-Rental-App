import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './ModalAdvert.module.css';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onModalClose, children }) => {

  useEffect(() => {
    if (modalRoot) {
      document.body.classList.add('no-scroll');
      const appContainer = document.querySelector('.appContainer');
      const rootElement = document.querySelector('#root');
      const contentElement = document.querySelector('.content');

      if (appContainer) {
        appContainer.classList.add('no-scroll');
      }
      if (rootElement) {
        rootElement.classList.add('no-scroll');
      }
      if (contentElement) {
        contentElement.classList.add('no-scroll');
      }
    }
    return () => {
      document.body.classList.remove('no-scroll');
      const appContainer = document.querySelector('.appContainer');
      const rootElement = document.querySelector('#root');
      const contentElement = document.querySelector('.content');

      if (appContainer) {
        appContainer.classList.remove('no-scroll');
      }
      if (rootElement) {
        rootElement.classList.remove('no-scroll');
      }
      if (contentElement) {
        contentElement.classList.remove('no-scroll');
      }
    };
  }, []);

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

  if (!modalRoot) return null;

  return createPortal(
    <div className={css.modal_overlay} onClick={handleBackdropClick}>
      {children}
    </div>,
    modalRoot
  );
};

export default Modal;
