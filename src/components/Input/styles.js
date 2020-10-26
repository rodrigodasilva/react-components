import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  margin-bottom: 12px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  .field {
    color: var(--default-color);
    outline: 0;
    padding: 12px;
    position: relative;
    width: 100%;
    max-height: 35px;
    font-size: 14px;
    border: 2px solid transparent;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &.default {
      border-radius: 5px;
      appearance: none;
      background: #f2f2f2;
      margin-top: 18px;

      &.square {
        border-radius: 5px;
      }

      &.rounded {
        border-radius: 25px;
        & ~ .label {
          margin-left: 12px;
        }
      }
    }

    &.outlined {
      background: #fff;
      border-color: #b3b3b3;
      max-height: 45px;
      border-radius: 5px;
    }

    &.text {
      background: none;
      border: none;
      padding: 22px 0px 6px;
    }

    &.hasError {
      border-color: var(--danger-color);
    }

    &.hasStartIcon {
      padding-left: 36px;
    }

    &.hasEndIcon {
      padding-right: 36px;
    }

    &:focus {
      background: #fff;
      box-shadow: 2px 2px 7px rgba(172, 194, 249, 0.7490196078431373);

      &:not([disabled]):not(.hasError) {
        border-color: var(--secondary-color);
      }
    }
  }

  .icon {
    position: absolute;
    display: flex;
    align-items: center;

    &.default {
      margin-top: 16px;
    }

    &.start {
      left: 12px;
    }

    &.end {
      right: 12px;
    }
  }
`;

export const Label = styled.label`
  &.label {
    color: var(--text-color);
    font-size: 14px;
    position: absolute;

    &.default,
    &.text {
      top: 0;
    }

    &.outlined {
      font-size: 15px;
      height: 15px;
      top: -8px;
      left: 12px;
      display: block;
      padding: 0 3px;
      background: #fff;
      z-index: 2;
    }

    &.hasError {
      color: var(--danger-color);
    }

    &.isFocused {
      &.outlined {
        color: var(--secondary-color);

        &.hasError {
          color: var(--danger-color);
        }
      }
    }
  }
`;

export const ErrorMessage = styled.div`
  color: var(--danger-color);
  display: inherit;
  margin-top: 4px;
  font-size: 14px;

  svg {
    fill: var(--danger-color);
    height: 14px;
    margin-right: var(--space-xxs);
    width: 14px;
  }
`;
