import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const Component = () => (
  <p>Just display text!</p>
);

describe('Example Test', () => {
  it('Render example component', () => {
    render(<Component />);

    const paragraph = screen.getByText('Just display text!');

    expect(paragraph).toBeInTheDocument();
  });
});
