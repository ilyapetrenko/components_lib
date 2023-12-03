import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom' //!!!!!!!!
import Button from './Button';

describe('Button Component', () => {
    it('default props', () => {
        const { getByText } = render(<Button />);
        const buttonElement = getByText('Button');
        expect(buttonElement).toBeInTheDocument();
    });

    it('specified title', () => {
        const { getByText } = render(<Button title="Click Me" />);
        const buttonElement = getByText('Click Me');
        expect(buttonElement).toBeInTheDocument();
    });

    it('specified onclick', () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<Button onClick={onClickMock} />);
        const buttonElement = getByText('Button');

        fireEvent.click(buttonElement);
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
