import React from 'react';
import { render, screen } from '@testing-library/react'
import App from '../App.jsx';
describe('App', () => {
    it('should render app', async () => {
        render(<App />);
        const title = await screen.findByText('Hello');

        expect(title).toBeInTheDocument();
    })
})