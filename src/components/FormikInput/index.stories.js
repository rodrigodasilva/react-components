import React from 'react';
import { Formik } from 'formik';

import InputFormik from '.';

export default {
  title: 'Components/InputFormik',
  component: InputFormik,
};

function ExampleForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <InputFormik type="text" label="Full Name" name="fullName" />
      <InputFormik type="textarea" label="Comment" name="comment" />
      <InputFormik
        type="select"
        label="Default Currency"
        name="defaultCurrency"
        options={[
          { value: 'USD', label: 'American Dollar' },
          { value: 'EUR', label: 'Euro' },
        ]}
      />
      <InputFormik
        type="radio"
        label="Gender"
        name="gender"
        options={[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ]}
      />
      <InputFormik
        type="checkbox"
        label="Hobbies"
        name="hobbies"
        options={[
          { value: 'baking', label: 'Baking' },
          { value: 'dance', label: 'Dance' },
        ]}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export const Default = () => {
  return (
    <div style={{ minWidth: '400px', minHeight: '400px' }}>
      <Formik
        component={ExampleForm}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        initialValues={{
          fullName: '',
          comment: '',
          defaultCurrency: '',
          gender: '',
          hobbies: [],
        }}
        validate={(values, props) => {
          const errors = {};

          if (!values.fullName) {
            errors.fullName = 'Full name is required';
          }
          if (!values.comment) {
            errors.comment = 'Comment is required';
          }
          if (!values.defaultCurrency) {
            errors.defaultCurrency = 'defaultCurrency is required';
          }
          if (!values.gender) {
            errors.gender = 'gender is required';
          }
          if (!values.hobbies.length) {
            errors.hobbies = 'hobbies is required';
          }
          return errors;
        }}
      />
    </div>
  );
};
