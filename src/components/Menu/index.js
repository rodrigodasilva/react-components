import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Container, WrapperButton, Dropdown } from './styles';

const Menu = ({ position, theme, button, children, className, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonHeight, setButtonHeight] = useState(0);
  const [buttonWidth, setButtonWidth] = useState(0);

  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (buttonRef && buttonRef.current) {
      setButtonHeight(buttonRef.current.offsetHeight);
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, []);

  const handleCloseMenu = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleCloseMenu);
    return () => {
      document.removeEventListener('mouseup', handleCloseMenu);
    };
  });

  return (
    <Container className={className} {...rest}>
      <WrapperButton
        className="wrapper-button"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        ref={buttonRef}
      >
        {button}
      </WrapperButton>

      <Dropdown
        className={classNames(
          'dropdown',
          { active: isOpen },
          `${theme}`,
          `${position}`
        )}
        role="menu"
        buttonHeight={buttonHeight}
        buttonWidth={buttonWidth}
        ref={menuRef}
      >
        {children}
      </Dropdown>
    </Container>
  );
};

Menu.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  button: PropTypes.element.isRequired,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  theme: PropTypes.oneOf(['light', 'dark']),
  className: PropTypes.string,
};

Menu.defaultProps = {
  position: 'bottom',
  theme: 'light',
  className: '',
};

export default Menu;
