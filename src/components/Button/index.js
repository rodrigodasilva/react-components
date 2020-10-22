import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import { Container } from './styles';

const Button = ({
  bold,
  children,
  className,
  color,
  variant,
  size,
  shape,
  startIcon,
  endIcon,
  href,
  isLoading,
  fullWidth,
  ...rest
}) => {
  return (
    <Container
      as={href ? 'a' : 'button'}
      role={href ? '' : 'button'}
      aria-busy={isLoading}
      className={classNames(
        'button',
        color,
        variant,
        size,
        shape,
        { isLoading, bold, fullWidth },
        className
      )}
      {...(href && { href })}
      {...rest}
    >
      {isLoading && (
        <Spinner
          color={variant === 'filled' ? `${color}-contrast` : color}
          size={size === 'small' ? 14 : 22}
          className="loading"
          position="absolute"
        />
      )}
      <>
        {startIcon && <span className="startIcon">{startIcon}</span>}
        <span className="children">{children}</span>
        {endIcon && <span className="endIcon">{endIcon}</span>}
      </>
    </Container>
  );
};

Button.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
  ]),
  variant: PropTypes.oneOf(['filled', 'text', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shape: PropTypes.oneOf(['square', 'round-square', 'circle']),
  startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  endIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  href: PropTypes.string,
  isLoading: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  color: 'default',
  variant: 'filled',
  size: 'medium',
  shape: 'square',
  bold: false,
  className: '',
  startIcon: '',
  endIcon: '',
  href: '',
  isLoading: false,
  fullWidth: false,
};

export default Button;
