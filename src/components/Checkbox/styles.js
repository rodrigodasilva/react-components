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

  input {
    margin: 0;
    &:not([disabled]) {
      cursor: pointer;

      & ~ .label {
        cursor: pointer;
      }
    }
  }

  .label {
    font-size: 14px;
    color: var(--text-color);
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
