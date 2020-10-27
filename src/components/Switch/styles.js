import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  width: max-content;

  &.label-placement {
    &--start {
      flex-direction: row-reverse;
      align-items: center;
      .label {
        margin-right: 6px;
      }
    }

    &--top {
      flex-direction: column-reverse;
      align-items: center;
      .label {
        margin-bottom: 2px;
      }
    }

    &--end {
      align-items: center;
      .label {
        margin-left: 6px;
      }
    }

    &--bottom {
      flex-direction: column;
      align-items: center;
      .label {
        margin-top: 2px;
      }
    }
  }

  .label {
    font-size: 14px;
    color: var(--text-color);
    cursor: pointer;
  }
`;

export const CustomSwitch = styled.label`
  &.switch {
    position: relative;
    display: inline-block;
    width: 28px;
    height: 16px;
  }

  &.switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.4s;

    &.rounded {
      border-radius: 34px;
      &:before {
        border-radius: 50%;
      }
    }
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    left: 2px;
    bottom: 2px;
    background-color: #fff;
    transition: transform 0.15s ease-in-out, background-color 0.15s ease-in-out;
    box-shadow: 0px 2px 2px #00000033;
  }

  input:checked {
    & + .slider {
      &.primary {
        background-color: var(--blue-2);
      }
      &.success {
        background-color: var(--success-color);
      }
      &.danger {
        background-color: var(--danger-color);
      }

      &:before {
        transform: translateX(100%);
      }
    }
  }
`;

export const ErrorMessage = styled.div`
  color: var(--danger-color);
  display: inherit;
  margin-top: 4px;
  font-size: 14px;
`;
