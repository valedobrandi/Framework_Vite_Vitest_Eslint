import React, { render, screen } from '@testing-library/react';

import App from '../src/App.tsx';


it('should show "Vite + React" text', () => {

  render(<App />);

  expect(screen.getByText(/vite \+ react/i)).toBeInTheDocument();

})