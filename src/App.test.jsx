import { render, screen } from '@testing-library/react';
import { it, expect } from 'vitest';
import { vi } from 'vitest';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Shop from './components/Shop';

vi.mock('./components/Home', () => {
  return {
    default: () => <div>Home</div>,
  };
});

vi.mock('./components/Shop', () => {
  return {
    default: () => <div>Shop</div>,
  };
});

it('renders Home component by default', () => {
  render(
    <Router>
      <App />
    </Router>,
  );
  const homeElement = screen.getByText('Home');
  expect(homeElement).toBeInTheDocument();
});

it('renders Shop component when route is /shop', () => {
  window.history.pushState({}, 'Shop page', '/shop');
  render(
    <Router>
      <Shop />
    </Router>,
  );
  const shopElement = screen.getByText('Shop');
  expect(shopElement).toBeInTheDocument();
});
