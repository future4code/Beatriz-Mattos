import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import axios from 'axios';

axios.get = jest.fn();

test('renderiza dados vindos da requisição', async () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
