import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Checkbox from '.';

const props = {
  id: 'field_id',
  label: 'My Label',
};

describe('<Checkbox />', () => {
  it('Should display the base input', () => {
    const { container } = render(<Checkbox />);
    const errorDOM = container.querySelector(`.error`);
    expect(errorDOM).toBeNull();
  });

  it('Should have "label-placement--start" classname when "labelPlacement prop" is start', () => {
    const { container } = render(<Checkbox labelPlacement="start" />);
    const content = container.querySelector(`.content`);
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('label-placement--start');
  });

  it('Should have "label-placement--top" classname when "labelPlacement prop" is top', () => {
    const { container } = render(<Checkbox labelPlacement="top" />);
    const content = container.querySelector(`.content`);
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('label-placement--top');
  });

  it('Should have "label-placement--end" classname when "labelPlacement prop" is empty', () => {
    const { container } = render(<Checkbox />);
    const content = container.querySelector(`.content`);
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('label-placement--end');
  });

  it('Should have "label-placement--bottom" classname when "labelPlacement prop" is bottom', () => {
    const { container } = render(<Checkbox labelPlacement="bottom" />);
    const content = container.querySelector(`.content`);
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('label-placement--bottom');
  });

  it('Should display errors in the input', () => {
    const feedBackError = 'Errors will be displayed here';
    const { container, queryByText } = render(
      <Checkbox error={feedBackError} />
    );
    const errorDOM = container.querySelector(`.error`);

    expect(errorDOM).toBeInTheDocument();
    expect(errorDOM.textContent).toBe(feedBackError);
    expect(queryByText(feedBackError)).toBeInTheDocument();
  });

  it('Should be render a radio input', () => {
    const { getByLabelText } = render(<Checkbox type="radio" {...props} />);
    const input = getByLabelText(props.label);

    expect(input.type).toBe('radio');
  });

  it('Should change value of input ', () => {
    const { getByLabelText } = render(<Checkbox {...props} />);
    const input = getByLabelText(props.label);

    fireEvent.change(input, { target: { checked: true } });
    expect(input.checked).toBe(true);
  });

  it('Should call onchange event of input', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Checkbox {...props} onChange={onChange} />
    );
    const input = getByLabelText(props.label);

    fireEvent.click(input);
    expect(input.checked).toBe(true);
    expect(onChange).toBeCalled();
  });
});
