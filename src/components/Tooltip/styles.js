import styled from 'styled-components';

export const Container = styled.div`
  &.tooltip {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    position: relative;

    .tooltip-content {
      border: 1px solid #e5e5e5;
      border-radius: 5px;
      display: none;
      min-width: 150px;
      padding: 10px var(--space-sm);
      position: absolute;
      transition: opacity 0.5s;
      z-index: 1;

      &::after {
        border-style: solid;
        border-width: 10px;
        content: '';
        position: absolute;
      }
    }

    &:hover {
      .tooltip-content {
        display: block;
        opacity: 1;
        visibility: visible;
      }
    }

    &.dark {
      .tooltip-content {
        background-color: var(--default-color);
        color: var(--white);

        &::after {
          border-color: var(--default-color) transparent transparent transparent;
        }
      }
    }

    &.light {
      .tooltip-content {
        background: var(--white);
        border-radius: 5px;
        box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25);

        &::after {
          border-color: var(--white) transparent transparent transparent;
        }

        &::before {
          content: '';
          border-style: solid;
          border-width: 12px;
          position: absolute;
          border-color: var(--gray-2) transparent transparent transparent;
        }
      }
    }

    &.top {
      .tooltip-content {
        bottom: calc(100% + var(--space-sm));
        left: 50%;
        transform: translateX(-50%);
      }

      &.dark .tooltip-content {
        &::after {
          top: calc(100%);
          left: 50%;
          transform: translateX(-50%);
        }
      }

      &.light .tooltip-content {
        &::before,
        &::after {
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    &.bottom {
      .tooltip-content {
        top: calc(100% + var(--space-sm));
        left: 50%;
        transform: translateX(-50%);
      }

      &.dark .tooltip-content {
        &::after {
          bottom: calc(100%);
          left: 50%;
          transform: translateX(-50%) rotate(180deg);
        }
      }

      &.light .tooltip-content {
        &::before,
        &::after {
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%) rotate(180deg);
        }
      }
    }

    &.right {
      .tooltip-content {
        left: calc(100% + var(--space-sm));
        top: 50%;
        transform: translateY(-50%);
      }

      &.dark .tooltip-content {
        &::after {
          right: 100%;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
        }
      }

      &.light .tooltip-content {
        &::before,
        &::after {
          right: 100%;
          top: 50%;
          transform: translateY(-50%) rotate(90deg);
        }
      }
    }

    &.left {
      .tooltip-content {
        right: calc(100% + var(--space-sm));
        top: 50%;
        transform: translateY(-50%);
      }

      &.dark .tooltip-content {
        &::after {
          left: 100%;
          top: 50%;
          transform: translateY(-50%) rotate(270deg);
        }
      }

      &.light .tooltip-content {
        &::before,
        &::after {
          left: 100%;
          top: 50%;
          transform: translateY(-50%) rotate(270deg);
        }
      }
    }

    & .tooltip-content > * {
      font-size: 14px;
    }

    &.show {
      .tooltip-content {
        display: inline-block;
      }
    }
  }
`;
