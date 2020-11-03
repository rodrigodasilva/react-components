import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Container } from './styles';

const Tooltip = ({
  position,
  theme,
  render,
  children,
  show,
  className,
  ...rest
}) => {
  return (
    <Container
      className={classNames('tooltip', theme, position, className, {
        show,
      })}
      {...rest}
    >
      {render && <div className="tooltip-content">{render()}</div>}

      <div className="tooltip-target">{children}</div>
    </Container>
  );
};

Tooltip.propTypes = {
  render: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.func,
  ]).isRequired,
  children: PropTypes.element.isRequired,
  position: PropTypes.oneOf(['left', 'right', 'top', 'bottom']),
  theme: PropTypes.oneOf(['light', 'dark']),
  show: PropTypes.bool,
  className: PropTypes.string,
};

Tooltip.defaultProps = {
  position: 'top',
  theme: 'light',
  show: false,
  className: '',
};

export default Tooltip;
