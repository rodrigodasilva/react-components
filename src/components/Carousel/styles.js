import styled from 'styled-components';

export const Wrapper = styled.section`
  .slider {
    position: relative;
    width: 100%;
    padding-bottom: 15px;
    border-radius: 3px;
    overflow: hidden;
  }

  .content {
    position: relative;
    display: flex;
    transition: left 500ms ease-in-out;
  }

  .slide {
    min-width: 80%;
    margin-right: 30px;
  }

  .mockup {
    margin-bottom: 15px;
  }

  .mockup img.desktop {
    max-width: 350px;
    border-radius: 3px;
  }

  .slide h2 {
    font-weight: 600;
  }

  .secondary-text {
    line-height: 1.5em;
  }

  .button {
    margin-top: 15px;
  }

  .next {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(21, 21, 21, 0.6) 50%,
      rgba(21, 21, 21, 1) 100%
    );
    width: 20%;
    height: 100%;
    cursor: pointer;
    justify-content: flex-end;
    align-items: center;
  }

  .next button {
    max-height: 25px;
    opacity: 0.4;
    animation: next 1s infinite alternate;
    cursor: pointer;
  }

  /* For smaller devices */
  @media (max-width: 1150px) {
    .slide {
      min-width: 100%;
    }

    .mockup img.desktop {
      max-width: 80%;
    }

    .next {
      background: none;
    }
  }

  @keyframes next {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-10px);
    }
  }
`;
