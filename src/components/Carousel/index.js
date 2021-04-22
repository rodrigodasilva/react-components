import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';

import { Wrapper } from './styles';

const Carousel = () => {
  const [slidePosition, setSlidePosition] = useState(0);

  const portfolio = [
    {
      image:
        'https://image.freepik.com/vetores-gratis/wallpaper-de-paisagem-em-design-plano_74890-37.jpg',
      subheader: 'Lorem',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nobis, minus, accusantium itaque cupiditate asperiores`,
      button: ['Ver projeto', 'https://www.google.com'],
    },
    {
      image:
        'https://ohlaladani.com.br/wp-content/uploads/wallpaper-OHLALADANI_DESKTOP_WALLPAPERS_AVENTURA-2.jpg',
      subheader: 'Lorem lorem',
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias nobis, minus, accusantium itaque cupiditate asperiores`,
      button: ['Ver projeto', 'https://www.google.com'],
    },
  ];

  const nextSlide = () => {
    const slideWidth = document.getElementById('slide').clientWidth;

    if (Math.abs(slidePosition) <= (portfolio.length - 2) * (slideWidth + 30)) {
      setSlidePosition(slidePosition - (slideWidth + 30));
    } else {
      setSlidePosition(0);
    }
  };

  return (
    <Wrapper>
      <div className="slider">
        <div className="content" style={{ left: slidePosition }}>
          {portfolio.map((item) => {
            return (
              <div id="slide" className="slide" key={item.image}>
                <div className="mockup">
                  <img
                    src={item.image}
                    alt={item.subheader}
                    className="desktop"
                  />
                </div>
                <p className="sub-header">{item.subheader}</p>
                <h2>{item.header}</h2>

                <p className="secondary-text">{item.description}</p>
                {item.button ? (
                  <a
                    href={item.button[1]}
                    className="button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <hr /> {item.button[0]}
                  </a>
                ) : null}
              </div>
            );
          })}
        </div>
        <div className="next">
          <button onClick={() => nextSlide()} type="button">
            <FaChevronRight size={28} color="#fff" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Carousel;
