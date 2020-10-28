import styled from 'styled-components';

export const Container = styled.button`
  &.button {
    align-items: center;
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    display: inline-flex;
    font: 400 16px/19px 'Roboto', sans-serif;
    justify-content: center;
    outline: 0;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    transition-duration: 0.25s;
    transition-property: border-color;
    will-change: border-color;
    width: max-content;

    &::before {
      bottom: 0;
      content: '';
      left: 0;
      opacity: 0;
      position: absolute;
      right: 0;
      top: 0;
      transition-duration: 0.25s;
      transition-property: opacity;
    }

    &[disabled] {
      cursor: default;

      &.text {
        color: var(--disabled-color);
      }

      &.outlined {
        border-color: var(--disabled-color);
        color: var(--disabled-color);
      }

      &.filled {
        background-color: var(--disabled-color);
        color: var(--disabled-color-contrast);
      }
    }
  }

  .children {
    display: inherit;
    position: relative;

    img {
      max-width: none;
    }
  }

  .startIcon {
    display: inline-block;
    position: relative;

    &:not(:empty) {
      margin-right: var(--space-xs);
    }
  }

  .endIcon {
    display: inline-block;
    position: relative;

    &:not(:empty) {
      margin-left: var(--space-xs);
    }
  }

  &.isLoading {
    cursor: default;

    .children,
    .startIcon,
    .endIcon {
      opacity: 0;
    }
  }

  &.fullWidth {
    width: 100%;
  }

  &.default {
    &.text {
      color: var(--default-color);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--default-color-lighten);
          opacity: 0.1;
        }
      }
    }

    &.outlined {
      border-color: var(--default-color);
      color: var(--default-color);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--default-color-lighten);
          opacity: 0.1;
        }
      }
    }

    &.filled {
      background-color: var(--default-color);
      color: var(--default-color-contrast);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--default-color-lighten);
          opacity: 0.3;
        }
      }
    }
  }

  &.primary {
    &.text {
      color: var(--primary-color);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--primary-color-lighten);
          opacity: 0.1;
        }
      }
    }

    &.outlined {
      border-color: var(--primary-color);
      color: var(--primary-color);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--primary-color-lighten);
          opacity: 0.1;
        }
      }
    }

    &.filled {
      background-color: var(--primary-color);
      color: var(--primary-color-contrast);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--primary-color-lighten);
          opacity: 0.3;
        }
      }
    }
  }

  &.secondary {
    &.text {
      color: var(--secondary-color);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--secondary-color-lighten);
          opacity: 0.1;
        }
      }
    }

    &.outlined {
      border-color: var(--secondary-color);
      color: var(--secondary-color);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--secondary-color-lighten);
          opacity: 0.1;
        }
      }
    }

    &.filled {
      background-color: var(--secondary-color);
      color: var(--secondary-color-contrast);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--secondary-color-lighten);
          opacity: 0.3;
        }
      }
    }
  }

  &.success {
    &.text {
      color: var(--success-color);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--success-color-lighten);
          opacity: 0.1;
        }
      }
    }

    &.outlined {
      border-color: var(--success-color);
      color: var(--success-color);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--success-color-lighten);
          opacity: 0.1;
        }
      }
    }

    &.filled {
      background-color: var(--success-color);
      color: var(--success-color-contrast);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--success-color-lighten);
          opacity: 0.3;
        }
      }
    }
  }

  &.danger {
    &.text {
      color: var(--danger-color);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--danger-color-lighten);
          opacity: 0.1;
        }
      }
    }

    &.outlined {
      border-color: var(--danger-color);
      color: var(--danger-color);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--danger-color-lighten);
          opacity: 0.1;
        }
      }
    }

    &.filled {
      background-color: var(--danger-color);
      color: var(--danger-color-contrast);

      &:not([disabled]):not(.isLoading):hover {
        &::before {
          background-color: var(--danger-color-lighten);
          opacity: 0.3;
        }
      }
    }
  }

  &.small {
    height: var(--space);
    padding-left: var(--space-sm);
    padding-right: var(--space-sm);

    .children {
      font-size: 0.8em;
    }
  }

  &.medium {
    height: var(--space-md);
    padding-left: var(--space);
    padding-right: var(--space);

    .children {
      font-size: 0.9em;
    }
  }

  &.large {
    height: var(--space-lg);
    padding-left: var(--space);
    padding-right: var(--space);

    .children {
      font-size: 1em;
    }
  }

  &.square {
    border-radius: 5px;
  }

  &.round-square {
    border-radius: 15px;
  }

  &.circle {
    border-radius: 50%;
    padding: 0;

    &.small {
      width: var(--space);
      height: var(--space);
    }

    &.medium {
      width: var(--space-md);
      height: var(--space-md);
    }

    &.large {
      width: var(--space-lg);
      height: var(--space-lg);
    }
  }

  &.loading {
    position: absolute;
    z-index: 1;
  }

  &.bold {
    font-weight: bold;
  }
`;
