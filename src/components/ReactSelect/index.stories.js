import React, { useState } from 'react';
import ReactSelect from '.';

export default {
  title: 'Components/ReactSelect',
  component: ReactSelect,
};

export const SingleValue = () => {
  const [singleValue, setSingleValue] = useState(null);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleSelectSingleValue = (value) => {
    setSingleValue(value);
  };

  return (
    <div style={{ minWidth: '400px' }}>
      <ReactSelect
        value={singleValue}
        onChange={handleSelectSingleValue}
        options={options}
        label="Single Value"
      />
    </div>
  );
};

export const SingleValueCreatable = () => {
  const [singleValue, setSingleValue] = useState(null);
  const [options, setOptions] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]);

  const handleCreateOption = (_value) => {
    setOptions([...options, { label: _value, value: _value }]);
    setSingleValue({ label: _value, value: _value });
  };

  const handleSelectSingleValue = (value) => {
    setSingleValue(value);
  };

  return (
    <div style={{ minWidth: '400px' }}>
      <ReactSelect
        value={singleValue}
        onChange={handleSelectSingleValue}
        options={options}
        label="Single Creatable"
        isCreatable
        onCreateOption={(value) => handleCreateOption(value)}
      />
    </div>
  );
};

export const MultiValues = () => {
  const [multiValues, setMultiValues] = useState([]);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleSelectMultiValues = (values) => {
    setMultiValues(values);
  };

  return (
    <div style={{ minWidth: '400px' }}>
      <ReactSelect
        value={multiValues}
        onChange={handleSelectMultiValues}
        options={options}
        label="Multi values"
        isMulti
      />
    </div>
  );
};

export const MultiValuesCreatable = () => {
  const [multiValues, setMultiValues] = useState([]);
  const [options, setOptions] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]);

  const handleCreateOption = (_value) => {
    setOptions([...options, { label: _value, value: _value }]);
    setMultiValues([...multiValues, { label: _value, value: _value }]);
  };

  const handleSelectMultiValues = (values) => {
    setMultiValues(values);
  };

  return (
    <div style={{ minWidth: '400px' }}>
      <ReactSelect
        value={multiValues}
        onChange={handleSelectMultiValues}
        options={options}
        label="Multi values creatable"
        isMulti
        isCreatable
        onCreateOption={(value) => handleCreateOption(value)}
      />
    </div>
  );
};

export const MultiValuesCreatableOnInput = () => {
  const [multiValues, setMultiValues] = useState([]);
  const [options, setOptions] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]);

  const handleCreateOption = (_value) => {
    setOptions([...options, { label: _value, value: _value }]);
    setMultiValues([...multiValues, { label: _value, value: _value }]);
  };

  const handleSelectMultiValues = (values) => {
    setMultiValues(values);
  };

  return (
    <div style={{ minWidth: '400px' }}>
      <ReactSelect
        value={multiValues}
        onChange={handleSelectMultiValues}
        options={options}
        label="Create Option on input: (type and press enter or tab to create a tag)"
        isMulti
        isCreatable
        menuIsOpen={false}
        onCreateOption={(value) => handleCreateOption(value)}
      />
    </div>
  );
};
