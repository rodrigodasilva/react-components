import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Tooltip from '.';

describe('<Tooltip />', () => {
  it('should return the children and content text', () => {
    const { getByText } = render(
      <Tooltip render={() => <span>Tooltip here</span>}>
        <button type="button">default</button>
      </Tooltip>
    );

    expect(getByText('Tooltip here')).toBeInTheDocument();
    expect(getByText('default')).toBeInTheDocument();
  });

  it('should have "light" classname when "theme prop" is "empty"', () => {
    const { container } = render(
      <Tooltip render={() => <span>Tooltip here</span>}>
        <button type="button">default</button>
      </Tooltip>
    );

    expect(container.firstChild).toHaveClass(`light`);
  });

  it('should have "light" classname when "theme prop" is "light"', () => {
    const { container } = render(
      <Tooltip render={() => <span>Tooltip here</span>}>
        <button type="button">default</button>
      </Tooltip>
    );

    expect(container.firstChild).toHaveClass(`light`);
  });

  it('should have "dark" classname when "theme prop" is "dark"', () => {
    const { container } = render(
      <Tooltip theme="dark" render={() => <span>Tooltip here</span>}>
        <button type="button">dark</button>
      </Tooltip>
    );

    expect(container.firstChild).toHaveClass(`dark`);
  });

  it('should have "top" classname when "position prop" is "empty"', () => {
    const { container } = render(
      <Tooltip render={() => <span>Tooltip here</span>}>
        <button type="button">default</button>
      </Tooltip>
    );

    expect(container.firstChild).toHaveClass(`top`);
  });

  it('should have "top" classname when "position prop" is "top"', () => {
    const { container } = render(
      <Tooltip render={() => <span>Tooltip here</span>}>
        <button type="button">top</button>
      </Tooltip>
    );

    expect(container.firstChild).toHaveClass(`top`);
  });

  it('should have "right" classname when "position prop" is "right"', () => {
    const { container } = render(
      <Tooltip position="right" render={() => <span>Tooltip here</span>}>
        <button type="button">right</button>
      </Tooltip>
    );

    expect(container.firstChild).toHaveClass(`right`);
  });

  it('should have "bottom" classname when "position prop" is "bottom"', () => {
    const { container } = render(
      <Tooltip position="bottom" render={() => <span>Tooltip here</span>}>
        <button type="button">bottom</button>
      </Tooltip>
    );

    expect(container.firstChild).toHaveClass(`bottom`);
  });

  it('should have "left" classname when "position prop" is "left"', () => {
    const { container } = render(
      <Tooltip position="left" render={() => <span>Tooltip here</span>}>
        <button type="button">left</button>
      </Tooltip>
    );

    expect(container.firstChild).toHaveClass(`left`);
  });
});
