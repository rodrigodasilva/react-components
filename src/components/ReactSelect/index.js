import React, { useState, useCallback } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import PropTypes from 'prop-types';

import { Container, Label } from './styles';

const ReactSelect = ({
  name,
  placeholder,
  noOptionsMessage,
  label,
  value,
  options,
  isMulti,
  isClearable,
  isCreatable,
  onCreateOption,
  onChange,
  onKeyDown,
  onInputChange,
  className,
  ...rest
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = useCallback(
    (event) => {
      if (onChange) {
        onChange(event);
      }
    },
    [onChange]
  );

  const handleKeyDown = useCallback(
    (event) => {
      if (onKeyDown) {
        onKeyDown(event);
      }

      if (onCreateOption && inputValue) {
        switch (event.key) {
          case 'Enter':
          case 'Tab':
            onCreateOption(inputValue);
            setInputValue('');
            event.preventDefault();
            break;
          default:
        }
      }
    },
    [onKeyDown, onCreateOption, inputValue]
  );

  const handleInputChange = useCallback(
    (_value) => {
      setInputValue(_value);

      if (onInputChange) {
        onInputChange(_value);
      }
    },
    [onInputChange]
  );

  const handleCreateOption = useState(
    (_value) => {
      if (onCreateOption && _value) {
        onCreateOption(_value);
      }
    },
    [onCreateOption]
  );

  return (
    <Container className={className}>
      {label && <Label className="label">{label}</Label>}

      {isCreatable ? (
        <CreatableSelect
          name={name}
          options={options}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
          onCreateOption={handleCreateOption}
          onInputChange={handleInputChange}
          inputValue={inputValue}
          onKeyDown={handleKeyDown}
          classNamePrefix="react-select"
          isMulti={isMulti}
          isClearable={isClearable}
          formatCreateLabel={(inputValueOnCreate) =>
            `Criar "${inputValueOnCreate}"`
          }
          noOptionsMessage={() => noOptionsMessage}
          {...rest}
        />
      ) : (
        <Select
          name={name}
          options={options}
          value={value}
          inputValue={inputValue}
          placeholder={placeholder}
          onChange={handleChange}
          onInputChange={handleInputChange}
          onKeyDown={handleKeyDown}
          classNamePrefix="react-select"
          isMulti={isMulti}
          isClearable={isClearable}
          noOptionsMessage={() => noOptionsMessage}
          {...rest}
        />
      )}
    </Container>
  );
};

ReactSelect.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.oneOf([null]),
    PropTypes.object,
    PropTypes.array,
  ]),
  options: PropTypes.arrayOf(PropTypes.object),
  noOptionsMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  isMulti: PropTypes.bool,
  isClearable: PropTypes.bool,
  isCreatable: PropTypes.bool,
  onCreateOption: PropTypes.func,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onInputChange: PropTypes.func,
  className: PropTypes.string,
};

ReactSelect.defaultProps = {
  name: '',
  placeholder: 'Selecione',
  options: [{}],
  noOptionsMessage: 'Não há opções',
  label: '',
  value: null,
  isMulti: false,
  isClearable: true,
  isCreatable: false,
  onCreateOption: () => {},
  onChange: () => {},
  onKeyDown: () => {},
  onInputChange: () => {},
  className: '',
};

export default ReactSelect;
