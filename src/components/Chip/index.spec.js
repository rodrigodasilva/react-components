import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import Chip from '.';

describe('<Chip />', () => {
  it('should have "default" classname when "color prop" is empty', () => {
    const { container } = render(<Chip label="default" />);
    expect(container.firstChild).toHaveClass('default');
  });

  it('should have "default" classname when "color prop" is "default"', () => {
    const { container } = render(<Chip color="default" label="default" />);
    expect(container.firstChild).toHaveClass('default');
  });

  it('should have "primary" classname when "color prop" is "primary"', () => {
    const { container } = render(<Chip color="primary" label="primary" />);
    expect(container.firstChild).toHaveClass('primary');
  });

  it('should have "secondary" classname when "color prop" is "secondary"', () => {
    const { container } = render(<Chip color="secondary" label="secondary" />);
    expect(container.firstChild).toHaveClass('secondary');
  });

  it('should have "filled" classname when "variant prop" is empty', () => {
    const { container } = render(<Chip label="default" />);
    expect(container.firstChild).toHaveClass('filled');
  });

  it('should have "filled" classname when "variant prop" is "filled"', () => {
    const { container } = render(<Chip label="filled" variant="filled" />);
    expect(container.firstChild).toHaveClass('filled');
  });

  it('should have "outlined" classname when "variant prop" is "outlined"', () => {
    const { container } = render(<Chip label="outlined" variant="outlined" />);
    expect(container.firstChild).toHaveClass('outlined');
  });

  it('should have "medium" classname when "size prop" is empty', () => {
    const { container } = render(<Chip label="default" />);
    expect(container.firstChild).toHaveClass('medium');
  });

  it('should have "medium" classname when "size prop" is "medium"', () => {
    const { container } = render(<Chip size="medium" label="medium" />);
    expect(container.firstChild).toHaveClass('medium');
  });

  it('should have "small" classname when "size prop" is "small"', () => {
    const { container } = render(<Chip size="small" label="small" />);
    expect(container.firstChild).toHaveClass('small');
  });

  it('should have "icon" element when has "onDelete prop"', () => {
    const onDelete = jest.fn();
    const { container } = render(<Chip onDelete={onDelete} label="onDelete" />);

    const icon = container.querySelector('.icon');

    expect(icon).toBeInTheDocument();
  });

  it('should call onDelete when click on delete icon', () => {
    const onDelete = jest.fn();
    const { container } = render(<Chip onDelete={onDelete} label="onDelete" />);

    const icon = container.querySelector('.icon');

    fireEvent.click(icon);

    expect(icon).toBeInTheDocument();
    expect(onDelete).toBeCalled();
  });
});
