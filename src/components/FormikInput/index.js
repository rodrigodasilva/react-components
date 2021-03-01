import React from 'react';
import { connect } from 'formik';

import { Container } from './styles';

function extractInputProps({ formik, ...otherProps }, option) {
  const props = {
    value: formik.values[otherProps.name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    ...otherProps,
  };

  if (props.type === 'checkbox') {
    props.value = option.value;
    props.checked = formik.values[props.name].includes(option.value);
    props.onChange = (e) => {
      const val = formik.values[props.name];

      if (e.target.checked) {
        val.push(e.target.value);
      } else {
        val.splice(val.indexOf(e.target.value), 1);
      }

      formik.setFieldValue(val);
    };
  } else if (props.type === 'radio') {
    props.value = option.value;
    props.checked = option.value === formik.values[props.name];
  }

  return props;
}

const TextInput = (props) => <input {...extractInputProps(props)} />;
const TextAreaInput = (props) => <textarea {...extractInputProps(props)} />;

const SelectInput = (props) => {
  const { options } = props;

  return (
    <select {...extractInputProps(props)}>
      <option value="">Select a value</option>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label || o.value}
        </option>
      ))}
    </select>
  );
};

const CheckInput = (props) => {
  const { options } = props;
  return (
    <>
      {options.map((option) => (
        <label key={option.value}>
          <input {...extractInputProps(props, option)} />
          {option.label || option.value}
        </label>
      ))}
    </>
  );
};

const FormInput = (props) => {
  switch (props.type) {
    case 'radio':
    case 'checkbox':
      return CheckInput(props);
    case 'select':
      return SelectInput(props);
    case 'textarea':
      return TextAreaInput(props);
    default:
      return TextInput(props);
  }
};

const FormItem = connect((props) => {
  const { label, id, ...inputProps } = props;
  const { errors, touched } = props.formik;

  return (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}

      <FormInput id={id} {...inputProps} />

      {errors[inputProps.name] && touched[inputProps.name] && (
        <p>{errors[inputProps.name]}</p>
      )}
    </Container>
  );
});

export default FormItem;
