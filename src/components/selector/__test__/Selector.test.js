import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Selector } from '../Selector';

describe('Selector', () => {
  const mockedOnChange = jest.fn();
  const initializedSelect = (
    <Selector
      label="prueba"
      options={{
        a: 'uno',
        b: 'dos',
      }}
      onChange={mockedOnChange}
    />
  );

  it('should render component with options', async () => {
    render(initializedSelect);
    const select = await screen.findByLabelText('prueba');

    userEvent.click(select);
    const options = screen.getAllByRole('option');

    expect(select).toBeInTheDocument();
    expect(options).toHaveLength(2);
  });

  it('should call onChange function when selecting an option', async () => {
    render(initializedSelect);
    const select = await screen.findByLabelText('prueba');

    fireEvent.change(select, { target: { value: 'a' } });
    const isOptionSelected = await screen.findByDisplayValue('uno');

    expect(isOptionSelected).toBeTruthy();
    expect(mockedOnChange).toHaveBeenCalled();
  });
});
