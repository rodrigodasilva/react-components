import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Menu from '.';

describe('<Menu />', () => {
  it('should render the button that is pass on the prop', () => {
    const { container } = render(
      <Menu button={<span>@</span>}>
        <button type="button">Action</button>
      </Menu>
    );

    expect(container.firstChild.firstChild).toContainHTML(`<span>@</span>`);
  });

  it('should have "light" classname when "theme prop" is "empty"', () => {
    const { container } = render(
      <Menu button={<span>@</span>}>
        <button type="button">Action</button>
      </Menu>
    );

    expect(container.firstChild.lastChild).toHaveClass(`light`);
  });

  it('should have "light" classname when "theme prop" is "light"', () => {
    const { container } = render(
      <Menu theme="light" button={<span>@</span>}>
        <button type="button">Action</button>
      </Menu>
    );

    expect(container.firstChild.lastChild).toHaveClass(`light`);
  });

  it('should have "bottom" classname when "position prop" is "empty"', () => {
    const { container } = render(
      <Menu button={<span>@</span>}>
        <button type="button">Action</button>
      </Menu>
    );

    expect(container.firstChild.lastChild).toHaveClass(`bottom`);
  });

  it('should have "bottom" classname when "position prop" is "bottom"', () => {
    const { container } = render(
      <Menu position="bottom" button={<span>@</span>}>
        <button type="button">Action</button>
      </Menu>
    );

    expect(container.firstChild.lastChild).toHaveClass(`bottom`);
  });

  it('should have "top" classname when "position prop" is "top"', () => {
    const { container } = render(
      <Menu position="top" button={<span>@</span>}>
        <button type="button">Action</button>
      </Menu>
    );

    expect(container.firstChild.lastChild).toHaveClass(`top`);
  });

  it('should have "right" classname when "position prop" is "right"', () => {
    const { container } = render(
      <Menu position="right" button={<span>@</span>}>
        <button type="button">Action</button>
      </Menu>
    );

    expect(container.firstChild.lastChild).toHaveClass(`right`);
  });
});
