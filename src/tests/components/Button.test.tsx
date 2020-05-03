import React from 'react';
import { render } from '@testing-library/react';
import Button from '../../components/Button';
import lightTheme from '../../themes/lightTheme';

test('renders a button', () => {
    const { getByRole } = render(<Button theme={lightTheme} title="Hello" />);
    expect(getByRole('button')).toHaveTextContent('Hello');
});
