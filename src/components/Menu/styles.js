import styled from 'styled-components';

export const Container = styled.nav`
  position: relative;
  width: max-content;
`;

export const WrapperButton = styled.span`
  &.wrapper-button {
    display: flex;
    flex: 1;
    cursor: pointer;
  }
`;

export const Dropdown = styled.div`
  &::before {
    content: '';
    position: absolute;
    transform: translateX(-50%);
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0px 10px 10px;
  }

  &.dropdown {
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(157, 181, 203, 0.4);
    position: absolute;
    visibility: hidden;
    opacity: 0;
    will-change: visibility;
    z-index: 10;

    &.active {
      transition: visibility 0s, transform 0.2s ease-in, opacity 0.1s linear;
      opacity: 1;
      visibility: visible;
    }

    &.left {
      top: 0;
      right: 10px;
      transform: ${({ buttonWidth }) =>
        buttonWidth && `translateX(-${buttonWidth - 10}px)`};
      &.active {
        transform: ${({ buttonWidth }) =>
          buttonWidth && `translateX(-${buttonWidth}px)`};
      }
      &:before {
        transform: rotate(90deg);
        top: 12px;
        right: -14px;
      }
    }

    &.right {
      top: 0;
      left: 10px;
      transform: ${({ buttonWidth }) =>
        buttonWidth && `translateX(${buttonWidth - 10}px)`};
      &.active {
        transform: ${({ buttonWidth }) =>
          buttonWidth && `translateX(${buttonWidth}px)`};
      }
      &:before {
        transform: rotate(270deg);
        top: 12px;
        left: -14px;
      }
    }

    &.bottom {
      right: 0;
      top: 10px;
      transform: ${({ buttonHeight }) =>
        buttonHeight && `translateY(${buttonHeight - 10}px)`};

      &.active {
        transform: ${({ buttonHeight }) =>
          buttonHeight && `translateY(${buttonHeight}px)`};
      }

      &:before {
        top: -9px;
        right: 0px;
      }
    }

    &.top {
      right: 0;
      bottom: 10px;
      transform: ${({ buttonHeight }) =>
        buttonHeight && `translateY(-${buttonHeight - 10}px)`};
      &.active {
        transform: ${({ buttonHeight }) =>
          buttonHeight && `translateY(-${buttonHeight}px)`};
      }
      &:before {
        bottom: -10px;
        right: 10px;
        transform: rotate(180deg);
      }
    }

    & > * {
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      min-height: var(--space-md);
      padding-left: var(--space-sm);
      padding-right: var(--space-sm);
      text-decoration: none;
      white-space: nowrap;
      outline: none;
      width: 100%;

      &:first-of-type {
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }

      &:last-of-type {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }

    &.light {
      background-color: #fff;

      & > * {
        color: var(--text-color);

        &:hover {
          background-color: var(--bg);
        }
      }

      &::before {
        border-color: transparent transparent #fff;
      }
    }

    &.dark {
      background-color: var(--default-color);

      & > * {
        color: var(--default-color-contrast);
        &:hover {
          background-color: var(--default-color-lighten);
        }
      }

      &::before {
        border-color: transparent transparent var(--default-color);
      }
    }
  }
`;
