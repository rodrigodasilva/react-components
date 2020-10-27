import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  margin-bottom: 12px;
  width: 100%;
`;

export const CustomSelect = styled.select`
  color: var(--default-color);
  outline: 0;
  padding: 0 12px;
  position: relative;
  width: 100%;
  height: 35px;
  font-size: 14px;
  border: 2px solid transparent;
  border-radius: 5px;
  background: #f2f2f2;

  &:focus {
    background: #fff;
    box-shadow: 2px 2px 7px rgba(172, 194, 249, 0.7490196078431373);

    &:not([disabled]):not(.hasError) {
      border-color: var(--secondary-color);
    }
  }

  &.hasError {
    border-color: var(--danger-color);
  }
`;

export const Label = styled.label`
  &.label {
    color: var(--text-color);
    font-size: 14px;
    margin-bottom: 2px;
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
