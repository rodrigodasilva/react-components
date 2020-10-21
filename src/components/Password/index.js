import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function InputGetPasswordOrCode({ name, showValues }) {
  const [inputValue, setInputValue] = useState('');

  const onChange = e => {
    const { value } = e.target;

    setInputValue(value);
  };

  const renderValue = _value => {
    if (showValues) return _value || '';
    return _value ? '*' : '';
  };

  return (
    <Container>
      <input
        name={name}
        type={showValues ? 'text' : 'password'}
        required
        maxLength="6"
        minLength="6"
        onChange={onChange}
        value={inputValue}
      />

      <div className="container__spans">
        <span>{renderValue(inputValue.charAt(0))}</span>
        <span>{renderValue(inputValue.charAt(1))}</span>
        <span>{renderValue(inputValue.charAt(2))}</span>
        <span>{renderValue(inputValue.charAt(3))}</span>
        <span>{renderValue(inputValue.charAt(4))}</span>
        <span>{renderValue(inputValue.charAt(5))}</span>
      </div>
    </Container>
  );
}

InputGetPasswordOrCode.propTypes = {
  name: PropTypes.string.isRequired,
  showValues: PropTypes.bool,
};

InputGetPasswordOrCode.defaultProps = {
  showValues: false,
};

export default InputGetPasswordOrCode;
