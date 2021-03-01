import styled from 'styled-components';

export const FullScreen = styled.div`
  display: ${({ isOpen }) => (isOpen === 1 ? 'flex' : 'none')};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  cursor: pointer;
  animation: fadeIn 380ms ease-in-out 1;
  background-color: #2f3845b8;
  backdrop-filter: blur(2px);

  @keyframes fadeIn {
    from {
      background-color: #2f384521;
    }
    to {
      background-color: #2f3845b8;
    }
  }
`;

export const ModalContainer = styled.div`
  padding: 5px;
  background-color: #fff;
  border-radius: 15px;
  position: relative;
  cursor: default;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  animation: slideIn 350ms cubic-bezier(0.42, 0, 0.21, 1) 1;

  @keyframes slideIn {
    from {
      transform: translateY(-120px);
      opacity: 0;
    }

    20% {
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const ModalContent = styled.div`
  width: 100%;
  padding: 15px;
  overflow-y: auto;
  max-height: ${({ maxHeight }) => maxHeight};

  .modal__title {
    font-size: 18px;
    font-weight: 500;
  }

  .modal__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .modal__button-close {
    outline: none;
    cursor: pointer;

    :hover {
      opacity: 0.7;
    }
  }
`;
