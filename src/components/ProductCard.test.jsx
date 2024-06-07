import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProductCard from './ProductCard';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('ProductCard component', () => {
  const item = { title: 'Product 1', price: 109.95 };

  it('renders without crashing', () => {
    render(<ProductCard item={item} />);
    expect(screen.getByText('Product 1')).toBeVisible();
    expect(screen.getByText('💲109.95')).toBeVisible();
  });

  it('changes quantity when input value is changed', async () => {
    const onClick = vi.fn();
    const user = userEvent.setup();
    render(<ProductCard item={item} onClick={onClick} />);
    const quantityInput = screen.getByRole('spinbutton');
    await user.type(quantityInput, '2');
    expect(quantityInput.value).toBe('2');
  });
});
