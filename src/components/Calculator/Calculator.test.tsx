import React from 'react';
import { render } from '@testing-library/react';
import Calculator from './Calculator';

xit('renders calculator component', () => {
  const { container } = render(<Calculator />)

  expect(container).toMatchSnapshot();
});
