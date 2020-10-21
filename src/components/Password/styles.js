import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  input {
    height: 40px;
    width: 350px;
    padding: 5px 20px;
    font-size: 16px;
    display: flex;
    letter-spacing: 54px;

    z-index: 2;
    background: transparent;
    color: transparent;
    border: none;

    caret-color: #000;
  }

  .container__spans {
    display: flex;
    position: absolute;
  }

  span {
    width: 50px;
    height: 35px;
    border: 1px solid #d2d2d2;
    font-size: 24px;
    color: #6c6c6c;

    display: flex;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }
`;
