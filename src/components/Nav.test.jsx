import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter as Router } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import Nav from './Nav';
import Cart from './Cart';

describe('Check that all expected elements render', () => {
  it('renders Nav without crashing', () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );
  });

  it('renders home link', () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );
    const homeLinkElement = screen.getByRole('link', { name: /home/i });
    expect(homeLinkElement).toBeInTheDocument();
  });

  it('renders shop link', () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );
    const shopLinkElement = screen.getByRole('link', { name: /shop/i });
    expect(shopLinkElement).toBeInTheDocument();
  });

  it('renders navigation menu', () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );
    const headingElement = screen.getByRole('heading', {
      name: /🛒 abc store/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  it('renders shopping cart icon with correct number of items and total amount', () => {
    render(
      <Router>
        <Cart amount={2} total={10} />
      </Router>,
    );
    const cartItemsElement = screen.getByText('2');
    expect(cartItemsElement).toBeInTheDocument();
    const cartTotalElement = screen.getByText('$ 10.00');
    expect(cartTotalElement).toBeInTheDocument();
  });
});

describe('Test navigation links', () => {
  it('navigates to home page when home link is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Nav />
      </Router>,
    );
    const homeLinkElement = screen.getByRole('link', { name: /home/i });
    await user.click(homeLinkElement);
    expect(window.location.pathname).toBe('/');
  });

  it('navigates to shop page when shop link is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Nav />
      </Router>,
    );
    const shopLinkElement = screen.getByRole('link', { name: /shop/i });
    await user.click(shopLinkElement);
    expect(window.location.pathname).toBe('/shop');
  });
});
