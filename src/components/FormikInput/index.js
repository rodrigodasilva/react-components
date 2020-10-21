import React from 'react';
import { connect } from 'formik';

function extractInputProps({ formik, options, ...otherProps }, option) {
  const props = {
    value: formik.values[otherProps.name],
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    ...otherProps,
  };

  if (props.type === 'checkbox') {
    props.value = option.value;
    props.checked = formik.values[props.name].includes(option.value);
    props.onChange = e => {
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

const TextInput = props => <input {...extractInputProps(props)} />;
const TextAreaInput = props => <textarea {...extractInputProps(props)} />;

const SelectInput = props => (
  <select {...extractInputProps(props)}>
    <option value="">Select a value</option>
    {props.options.map(o => (
      <option key={o.value} value={o.value}>
        {o.label || o.value}
      </option>
    ))}
  </select>
);

const CheckInput = props => (
  <>
    {props.options.map(option => (
      <label key={option.value}>
        <input {...extractInputProps(props, option)} />
        {option.label || option.value}
      </label>
    ))}
  </>
);

const FormInput = props => {
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

const FormItem = connect(props => {
  const { label, ...inputProps } = props;
  const { errors, touched } = props.formik;
  return (
    <div>
      {label && <label>{label}</label>}

      <FormInput {...inputProps} />

      {errors[inputProps.name] && touched[inputProps.name] && (
        <p>{errors[inputProps.name]}</p>
      )}
    </div>
  );
});

export default FormItem;

// function ExampleForm(props) {
//   return (
//     <form onSubmit={props.handleSubmit}>
//       <FormItem type="text" label="Full Name" name="fullName" />
//       <FormItem type="textarea" label="Comment" name="comment" />
//       <FormItem
//         type="select"
//         label="Default Currency"
//         name="defaultCurrency"
//         options={[
//           { value: 'USD', label: 'American Dollar' },
//           { value: 'EUR', label: 'Euro' },
//         ]}
//       />
//       <FormItem
//         type="radio"
//         label="Gender"
//         name="gender"
//         options={[
//           { value: 'male', label: 'Male' },
//           { value: 'female', label: 'Female' },
//           { value: 'other', label: 'Other' },
//         ]}
//       />
//       <FormItem
//         type="checkbox"
//         label="Hobbies"
//         name="hobbies"
//         options={[
//           { value: 'baking', label: 'Baking' },
//           { value: 'dance', label: 'Dance' },
//         ]}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default function App() {
//   return (
//     <Formik
//       component={ExampleForm}
//       onSubmit={values => alert(JSON.stringify(values, null, 2))}
//       initialValues={{
//         fullName: '',
//         comment: '',
//         defaultCurrency: '',
//         gender: '',
//         hobbies: [],
//       }}
//       validate={(values, props) => {
//         const errors = {};

//         if (!values.fullName) {
//           errors.fullName = 'Full name is required';
//         }
//         if (!values.comment) {
//           errors.comment = 'Comment is required';
//         }
//         if (!values.defaultCurrency) {
//           errors.defaultCurrency = 'defaultCurrency is required';
//         }
//         if (!values.gender) {
//           errors.gender = 'gender is required';
//         }
//         if (!values.hobbies.length) {
//           errors.hobbies = 'hobbies is required';
//         }
//         return errors;
//       }}
//     />
//   );
// }
