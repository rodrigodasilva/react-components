import React, { useEffect, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import classes from 'classnames';
import { MdClose } from 'react-icons/md';

import { FullScreen, ModalContainer, ModalContent } from './styles';

const Modal = ({
  isOpen,
  style,
  maxWidth,
  maxHeight,
  className,
  title,
  children,
  onClose,
}) => {
  const modalRef = useRef();

  const handleKeyUp = useCallback(
    (e) => {
      const keys = {
        // ESC Key
        27: () => {
          e.preventDefault();
          onClose();
          window.removeEventListener('keyup', handleKeyUp, false);
        },
      };

      if (keys[e.keyCode]) {
        keys[e.keyCode]();
      }
    },
    [onClose]
  );

  const handleOutsideClick = useCallback(
    (e) => {
      if (modalRef.current.parentNode === e.target) {
        onClose();
        document.removeEventListener('click', handleOutsideClick, false);
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('click', handleOutsideClick, false);

    return () => {
      window.removeEventListener('keyup', handleKeyUp, false);
      document.removeEventListener('click', handleOutsideClick, false);
    };
  }, [handleKeyUp, handleOutsideClick]);

  return (
    <FullScreen className="modal" isOpen={isOpen ? 1 : 0}>
      <ModalContainer
        ref={modalRef}
        style={style}
        maxWidth={maxWidth}
        className={classes('modal__container', className)}
      >
        <ModalContent maxHeight={maxHeight}>
          <header className="modal__header">
            <div className="modal__title">{title}</div>

            <button
              type="button"
              onClick={onClose}
              className="modal__button-close"
            >
              <MdClose color="#858F9E" size={24} />
            </button>
          </header>

          {children}
        </ModalContent>
      </ModalContainer>
    </FullScreen>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
  ]),
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
  style: PropTypes.objectOf(PropTypes.any),
  className: PropTypes.string,
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
};

Modal.defaultProps = {
  title: '',
  style: {},
  className: '',
  maxWidth: '360px',
  maxHeight: 'max-content',
};

export default Modal;
