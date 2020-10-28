import styled from 'styled-components';

export const Container = styled.button`
  &.chip {
    outline: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    border: 1px solid transparent;

    width: max-content;

    &[disabled] {
      cursor: default;
      opacity: 0.9;
    }
  }

  .label {
    display: inherit;
    position: relative;
    cursor: initial;
  }

  .icon {
    cursor: pointer;
    margin-left: 4px;

    &:hover {
      opacity: 0.7;
    }
  }

  &.default {
    &.outlined {
      border-color: var(--default-color);
      color: var(--default-color);
    }

    &.filled {
      background-color: var(--default-color);
      color: var(--default-color-contrast);
    }
  }

  &.primary {
    &.outlined {
      border-color: var(--primary-color);
      color: var(--primary-color);
    }

    &.filled {
      background-color: var(--primary-color);
      color: var(--primary-color-contrast);
    }
  }

  &.secondary {
    &.outlined {
      border-color: var(--secondary-color);
      color: var(--secondary-color);
    }

    &.filled {
      background-color: var(--secondary-color);
      color: var(--secondary-color-contrast);
    }
  }

  &.success {
    &.outlined {
      border-color: var(--success-color);
      color: var(--success-color);
    }

    &.filled {
      background-color: var(--success-color);
      color: var(--success-color-contrast);
    }
  }

  &.danger {
    &.outlined {
      border-color: var(--danger-color);
      color: var(--danger-color);
    }

    &.filled {
      background-color: var(--danger-color);
      color: var(--danger-color-contrast);
    }
  }

  &.small {
    height: var(--space);
    padding-left: var(--space-xs);
    padding-right: var(--space-xs);

    .label {
      font-size: 14px;
    }
  }

  &.medium {
    height: var(--space-md);
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);

    .label {
      font-size: 16px;
    }
  }
`;
