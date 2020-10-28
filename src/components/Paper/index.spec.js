import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Paper from '.';

describe('<Paper />', () => {
  it('should render the Paper component', () => {
    const { container } = render(<Paper>Default</Paper>);
    expect(container.textContent).toBe('Default');
  });
});
