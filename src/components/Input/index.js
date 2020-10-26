import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import { IMaskInput } from 'react-imask/esm/index';

import { Container, Label, Content, ErrorMessage } from './styles';

const Input = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  onFocus,
  onBlur,
  className,
  error,
  variant,
  shape,
  disabled,
  startIcon,
  endIcon,
  type,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const selfId = id || uniqid(`input__`);

  const handleChange = (e) => {
    setInputValue(e.target.value);

    if (onChange) {
      onChange(e);
    }
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    setInputValue(e.target.value);

    if (onFocus) {
      onFocus(e);
    }
  };

  const handleOnBlur = (e) => {
    setIsFocused(false);
    setInputValue(e.target.value);

    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <Container className={classNames(variant, className, shape, { isFocused })}>
      <Content>
        <IMaskInput
          className={classNames('field', variant, shape, {
            hasError: Boolean(error),
            hasStartIcon: Boolean(startIcon),
            hasEndIcon: Boolean(endIcon),
          })}
          id={selfId}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleOnBlur}
          disabled={disabled || variant === 'text'}
          type={type}
          {...props}
        />
        {startIcon && (
          <span className={classNames('icon', 'start', variant)}>
            {startIcon}
          </span>
        )}
        {endIcon && (
          <span className={classNames('icon', 'end', variant)}>{endIcon}</span>
        )}
      </Content>

      {label && (
        <Label
          htmlFor={selfId}
          className={classNames('label', variant, {
            hasError: Boolean(error),
            isFocused,
          })}
        >
          {label}
        </Label>
      )}

      {error && <ErrorMessage className="error">{error}</ErrorMessage>}
    </Container>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'outlined', 'text']),
  shape: PropTypes.oneOf(['square', 'rounded']),
  startIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  endIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

Input.defaultProps = {
  id: '',
  value: '',
  onChange: () => {},
  onFocus: () => {},
  onBlur: () => {},
  label: '',
  placeholder: '',
  className: '',
  variant: 'default',
  shape: 'square',
  startIcon: '',
  endIcon: '',
  type: 'text',
  disabled: false,
  error: '',
};

export default Input;
