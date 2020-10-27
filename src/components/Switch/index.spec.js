import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Switch from '.';

const props = {
  id: 'field_id',
  label: 'My Label',
};

describe('<Switch />', () => {
  it('Should display the base input', () => {
    const { container } = render(<Switch />);
    const errorDOM = container.querySelector(`.error`);
    expect(errorDOM).toBeNull();
  });

  it('Should have "label-placement--start" classname when "labelPlacement prop" is start', () => {
    const { container } = render(<Switch labelPlacement="start" />);
    const content = container.querySelector(`.content`);
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('label-placement--start');
  });

  it('Should have "label-placement--top" classname when "labelPlacement prop" is top', () => {
    const { container } = render(<Switch labelPlacement="top" />);
    const content = container.querySelector(`.content`);
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('label-placement--top');
  });

  it('Should have "label-placement--end" classname when "labelPlacement prop" is empty', () => {
    const { container } = render(<Switch />);
    const content = container.querySelector(`.content`);
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('label-placement--end');
  });

  it('Should have "label-placement--bottom" classname when "labelPlacement prop" is bottom', () => {
    const { container } = render(<Switch labelPlacement="bottom" />);
    const content = container.querySelector(`.content`);
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass('label-placement--bottom');
  });

  it('Should have "primary" classname when "color prop" is empty', () => {
    const { container } = render(<Switch />);
    const slider = container.querySelector(`.slider`);
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveClass('primary');
  });

  it('Should have "success" classname when "color prop" is success', () => {
    const { container } = render(<Switch color="success" />);
    const slider = container.querySelector(`.slider`);
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveClass('success');
  });

  it('Should have "danger" classname when "color prop" is danger', () => {
    const { container } = render(<Switch color="danger" />);
    const slider = container.querySelector(`.slider`);
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveClass('danger');
  });

  it('Should display errors in the input', () => {
    const feedBackError = 'Errors will be displayed here';
    const { container, queryByText } = render(<Switch error={feedBackError} />);
    const errorDOM = container.querySelector(`.error`);

    expect(errorDOM).toBeInTheDocument();
    expect(errorDOM.textContent).toBe(feedBackError);
    expect(queryByText(feedBackError)).toBeInTheDocument();
  });

  it('Should change value of input ', () => {
    const { getByLabelText } = render(<Switch {...props} />);
    const input = getByLabelText(props.label);

    fireEvent.change(input, { target: { checked: true } });
    expect(input.checked).toBe(true);
  });

  it('Should call onchange event of input', () => {
    const onChange = jest.fn();
    const { getByLabelText } = render(
      <Switch {...props} onChange={onChange} />
    );
    const input = getByLabelText(props.label);

    fireEvent.click(input);
    expect(input.checked).toBe(true);
    expect(onChange).toBeCalled();
  });
});
