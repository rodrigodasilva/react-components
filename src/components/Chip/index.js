import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';

import { Container } from './styles';

const Chip = ({
  label,
  color,
  variant,
  size,
  className,
  onDelete,
  ...rest
}) => {
  return (
    <Container
      className={classNames('chip', color, variant, size, className)}
      {...rest}
    >
      <span className="label">{label}</span>

      {onDelete && (
        <MdClose
          onClick={onDelete}
          className="icon"
          size={size === 'small' ? 16 : 20}
        />
      )}
    </Container>
  );
};

Chip.propTypes = {
  label: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'danger',
    'success',
  ]),
  variant: PropTypes.oneOf(['filled', 'outlined']),
  size: PropTypes.oneOf(['small', 'medium']),
  className: PropTypes.string,
  onDelete: PropTypes.func,
};

Chip.defaultProps = {
  color: 'default',
  variant: 'filled',
  size: 'medium',
  className: '',
  onDelete: null,
};

export default Chip;
