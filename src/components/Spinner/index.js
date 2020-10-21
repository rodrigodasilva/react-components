import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { Container } from './styles';

const Spinner = ({ className, color, position, size, ...rest }) => {
  return (
    <Container
      className={classNames(color, className, position)}
      style={{
        fontSize: size,
        height: size,
        width: size,
      }}
      role="progressbar"
      aria-busy="true"
      viewBox="0 0 66 66"
      {...rest}
    >
      <circle
        className="circle"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </Container>
  );
};

Spinner.propTypes = {
  color: PropTypes.oneOf([
    'default',
    'default-contrast',
    'primary',
    'primary-contrast',
    'secondary',
    'secondary-contrast',
    'success',
    'success-contrast',
    'danger',
    'danger-contrast',
  ]),
  position: PropTypes.oneOf(['relative', 'absolute']),
  size: PropTypes.number,
  className: PropTypes.string,
};

Spinner.defaultProps = {
  size: 36,
  color: 'default',
  className: '',
  position: 'relative',
};

export default Spinner;
