import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Input from '.';

const props = {
  id: 'inpud_id',
  label: 'My Label',
};

describe('<Input />', () => {
  it('Should display the base input', () => {
    const { container } = render(<Input />);
    const errorDOM = container.querySelector(`.error`);
    expect(errorDOM).toBeNull();
  });

  it('Should display errors in the input', () => {
    const feedBackError = 'Errors will be displayed here';
    const { container, queryByText } = render(<Input error={feedBackError} />);
    const errorDOM = container.querySelector(`.error`);

    expect(errorDOM).toBeInTheDocument();
    expect(errorDOM.textContent).toBe(feedBackError);
    expect(queryByText(feedBackError)).toBeInTheDocument();
  });

  it('Should have "default" classname when "variant prop" is empty', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toHaveClass('default');
  });

  it('Should have "outlined" classname when "variant prop" is outlined', () => {
    const { container } = render(<Input variant="outlined" />);
    expect(container.firstChild).toHaveClass('outlined');
  });

  it('Should have "text" classname when "variant prop" is text', () => {
    const { container } = render(<Input variant="text" />);
    expect(container.firstChild).toHaveClass('text');
  });

  it('Should have "square" classname when "shape prop" is empty', () => {
    const { container } = render(<Input shape="square" />);
    expect(container.firstChild).toHaveClass('square');
  });

  it('Should have "rounded" classname when "shape prop" is rounded', () => {
    const { container } = render(<Input shape="rounded" />);
    expect(container.firstChild).toHaveClass('rounded');
  });

  it('Should be render a start icon', () => {
    const { container } = render(<Input startIcon="<-" />);
    const field = container.querySelector(`.field`);
    const icon = container.querySelector(`.icon`);

    expect(field).toBeInTheDocument();
    expect(field).toHaveClass('hasStartIcon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('start');
  });

  it('Should be render a end icon', () => {
    const { container } = render(<Input endIcon="->" />);
    const field = container.querySelector(`.field`);
    const icon = container.querySelector(`.icon`);

    expect(field).toBeInTheDocument();
    expect(field).toHaveClass('hasEndIcon');
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass('end');
  });

  it('Should change value of input ', () => {
    const { getByLabelText } = render(<Input {...props} />);
    const input = getByLabelText(props.label);

    fireEvent.change(input, { target: { value: '23' } });
    expect(input.value).toBe('23');
  });

  it('Should call onchange event of input', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(<Input {...props} onChange={onChange} />);
    const input = getByLabelText(props.label);

    fireEvent.change(input, { target: { value: '23' } });
    expect(input.value).toBe('23');
    expect(onChange).toBeCalled();
  });
});
