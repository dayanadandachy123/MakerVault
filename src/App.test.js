// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MakerVault title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MakerVault/i);
    expect(titleElement).toBeInTheDocument();
});
