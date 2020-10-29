import styled from 'styled-components';

export const Container = styled.label`
  width: 100%;

  .react-select__control {
    min-height: 35px;
    background: #f2f2f2;
    border-radius: 5px;
    padding: 0 6px;
    font-size: 14px;
    border: 0 !important;
    color: var(--text-color) !important;
    box-shadow: none !important;

    max-height: 88px;
    overflow-y: auto;
  }

  .react-select__value-container,
  .react-select__value-container--is-multi {
    padding: 0;
  }

  .react-select__indicator,
  .react-select__dropdown-indicator {
    padding: 2px;
  }

  .react-select__single-value {
    color: var(--text-color);
  }

  .react-select__multi-value {
    background: var(--default-color);
    border-radius: 12px;
    padding: 0 6px;
  }

  .react-select__multi-value__label {
    color: #fff;
    font-size: 14px;
  }

  .react-select__multi-value__remove {
    color: #fff;
    border-radius: 12px;
    cursor: pointer;

    &:hover {
      background: var(--default-color);
      color: #ddd;
    }
  }

  .react-select__input input {
    color: var(--text-color) !important;
  }

  .react-select__indicator-separator {
    display: none;
  }
  .react-select__dropdown-indicator {
    color: var(--default-color);
  }
  .react-select__dropdown-indicator svg {
    height: 12px;
  }
  .react-select__clear-indicator {
    color: var(--default-color);
  }
  .react-select__clear-indicator svg {
    height: 12px;
    width: 16px;
  }

  .react-select__menu {
    font-size: 14px;
  }

  .react-select__menu-list {
    border-radius: 4px;
    max-height: 220px !important;
  }

  .react-select__option {
    color: var(--text-color);
    font-size: 14px;
    padding: 6px;

    &:active {
      background: var(--default-color) !important;
      color: #fff;
    }
  }

  .react-select__option--is-focused {
    background: var(--default-color-lighten);
    color: #fff;
  }

  .react-select__option--is-selected {
    background: var(--default-color);
    color: #fff;
  }

  .react-select__group-heading {
    padding-left: 6px;
  }
`;

export const Label = styled.label`
  &.label {
    color: var(--text-color);
    font-size: 14px;
    margin-bottom: 2px;
  }
`;
