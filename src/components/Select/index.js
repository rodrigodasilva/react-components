import * as React from 'react';
import classNames from 'classnames/bind';
import uniqid from 'uniqid';
import PropTypes from 'prop-types';

import { Container, Label, CustomSelect, ErrorMessage } from './styles';

const Select = ({
  id,
  label,
  className,
  error,
  placeholder,
  children,
  ...props
}) => {
  const selfId = id || uniqid(`select__`);

  return (
    <Container className={className}>
      {label && (
        <Label htmlFor={selfId} className="label">
          {label}
        </Label>
      )}

      <CustomSelect
        {...props}
        id={selfId}
        className={classNames({ hasError: Boolean(error) })}
      >
        <option hidden value="">
          {placeholder}
        </option>
        {children}
      </CustomSelect>

      {error && <ErrorMessage className="error">{error}</ErrorMessage>}
    </Container>
  );
};

Select.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};

Select.defaultProps = {
  id: '',
  label: '',
  placeholder: '',
  className: '',
  error: '',
};

export default Select;
