import styled from 'styled-components';

export const Container = styled.svg`
  animation: rotation 1.2s linear infinite;

  &.absolute {
    position: absolute;
  }

  &.default {
    stroke: var(--default-color);
  }

  &.default-contrast {
    stroke: var(--default-color-contrast);
  }

  &.primary {
    stroke: var(--primary-color);
  }

  &.primary-contrast {
    stroke: var(--primary-color-contrast);
  }

  &.secondary {
    stroke: var(--secondary-color);
  }

  &.secondary-contrast {
    stroke: var(--secondary-color-contrast);
  }

  &.success {
    stroke: var(--success-color);
  }

  &.success-contrast {
    stroke: var(--success-color-contrast);
  }

  &.danger {
    stroke: var(--danger-color);
  }

  &.danger-contrast {
    stroke: var(--danger-color-contrast);
  }

  .circle {
    animation: turn 1.2s ease-in-out infinite;
    stroke-dasharray: 180;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    stroke-width: 6;
    transform-origin: center;
  }

  @keyframes rotation {
    100% {
      transform: rotate(270deg);
    }
  }

  @keyframes turn {
    0% {
      stroke-dashoffset: 180;
    }

    50% {
      stroke-dashoffset: 45;
      transform: rotate(135deg);
    }

    100% {
      stroke-dashoffset: 180;
      transform: rotate(445.5deg);
    }
  }
`;
