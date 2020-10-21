import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 240px;
`;
export const ContainerInput = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;

  input {
    height: 40px;
    cursor: pointer;
    padding: 0 55px 0px 10px;
    width: 100%;
    z-index: 1;
    background: transparent;
    border: 1px solid #ddd;
  }

  .input__clear-button {
    position: absolute;
    right: 18px;
    position: absolute;
    right: 35px;
    display: flex;
    align-items: center;
    z-index: 4;
    height: 15px;
    width: 15px;
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }

    &::before {
      content: '';
      cursor: pointer;
      position: absolute;
      height: 15px;
      width: 3px;
      border-radius: 5px;
      background: #ddd;
      transform: rotate(-45deg);
    }
    &::after {
      content: '';
      cursor: pointer;
      position: absolute;
      height: 15px;
      width: 3px;
      border-radius: 5px;
      background: #ddd;
      transform: rotate(45deg);
    }
  }

  .input__arrow-down {
    position: absolute;
    right: 5px;
    display: flex;
    align-items: center;
    z-index: 0;
    height: 15px;
    width: 15px;

    &::before {
      content: '';
      cursor: pointer;
      position: absolute;
      height: 13px;
      width: 3px;
      right: 20px;
      border-radius: 5px;
      background: #ddd;
      transform: rotate(-45deg);
    }
    &::after {
      content: '';
      cursor: pointer;
      position: absolute;
      height: 13px;
      width: 3px;
      border-radius: 5px;
      background: #ddd;
      transform: rotate(45deg);
    }
  }
`;

export const ContainerMenu = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  justify-content: space-between;
  background: #fff;
  position: absolute;
  top: 50px;
  left: ${({ horizontalAlign }) => horizontalAlign === 'left' && '0'};
  right: ${({ horizontalAlign }) => horizontalAlign === 'right' && '0'};
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 440px) {
    flex-wrap: wrap;
  }
`;

export const Menu = styled.div`
  min-width: 125px;
  display: flex;
  flex-direction: column;

  .menu__option {
    margin-bottom: 5px;
    margin-right: 5px;
    text-align: left;
    padding: 5px 10px;
    border-radius: 5px;

    &.active {
      background: #226ba5;
      color: #fff;
    }
  }
`;

export const Calendars = styled.div`
  display: ${({ hidden }) => (hidden ? 'none' : 'flex')};
  justify-content: center;
  flex-direction: column;

  .calendars__body {
    display: flex;
    justify-content: center;
    @media screen and (max-width: 780px) {
      flex-wrap: wrap;
    }
  }

  .calendars__footer {
    margin: 10px 5px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .button {
      margin: 0 5px;
      padding: 5px 15px;
      background: #ddd;
      color: #444;
      border-radius: 5px;

      &.button--success {
        background: #529454;
        color: #fff;
      }
    }
  }

  .react-datepicker {
    border: none;
    margin: 5px;
    font-size: 12px;
  }

  .react-datepicker__header {
    border: none;
    background: #fff;
    padding-top: 0;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    font-size: 12px;
    text-transform: capitalize;
    margin: 12px 0;
  }

  .react-datepicker__navigation {
    top: 10px;
    border: 8px solid transparent;
  }

  .react-datepicker__navigation--previous {
    border-right-color: #ccc;
  }

  .react-datepicker__navigation--next {
    border-left-color: #ccc;
  }

  .react-datepicker__day-name,
  .react-datepicker__day,
  .react-datepicker__time-name {
    margin: 0px;
    padding: 8px 0px;
    width: 40px;
    text-align: center;
    border-radius: 0;
    text-transform: capitalize;

    &:hover {
      border-radius: 0;
    }

    @media screen and (max-width: 500px) {
      padding: 5px 0px;
      width: 30px;
    }
  }

  .react-datepicker__day--in-range {
    background: #226ba5 !important;
    color: #fff !important;
  }

  .react-datepicker__day--in-selecting-range {
    background: #226ba5;
    opacity: 0.7;

    &:hover {
      background: #226ba5;
    }

    &.react-datepicker__day--range-start {
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
    }
    &.react-datepicker__day--range-end {
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    &.react-datepicker__day--selecting-range-start {
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }
    &.react-datepicker__day--selecting-range-end {
      border-top-right-radius: 15px;
      border-bottom-right-radius: 15px;
    }
  }

  .react-datepicker__day--range-start {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .react-datepicker__day--range-end {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
`;
