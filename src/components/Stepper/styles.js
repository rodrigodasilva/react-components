import styled from 'styled-components';
import styledBy from 'styled-by';

export const StepperList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .step__wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    width: 100%;

    &::after {
      content: ' ';
      position: absolute;
      background-color: #aaa;
      z-index: 1;
      height: 2px;

      width: calc(100% - 50px);
      left: calc(50% + 25px);

      ${styledBy({
        visited: `
          background-color: #429e42;
      `,
      })}
    }
  }

  :last-child .step__wrapper::after {
    display: none;
  }

  .step__indicator {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-weight: 700;

    background: #aaa;
    border: 2px solid #aaa;
    color: #fff;

    ${styledBy({
      active: `
        border: 2px solid #1976d2;
        background: #1976d2;
        
      `,
      visited: `
        border: 2px solid #429e42;
        background: #429e42;
      `,
    })}
  }

  .step__label {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    font-size: 1.4rem;
    width: 100%;
    text-align: center;
    color: #aaa;
    word-break: break-word;

    ${styledBy({
      active: `
        color: #1976d2;
        
      `,
      visited: `
        color: #429e42;
      `,
    })}
  }
`;
