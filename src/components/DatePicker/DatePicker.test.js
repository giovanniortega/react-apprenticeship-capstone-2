import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { StoreContext } from '../../utils/store/StoreContext';
import DatePicker from '../DatePicker/DatePicker';

const value = {};
const date = new Date().toLocaleDateString('en-CA');

describe('<DatePicker />', () => {
  let component;
  let input;

  beforeAll(() => {
    component = render(
      <StoreContext.Provider value={value}>
        <DatePicker />
      </StoreContext.Provider>
    );
    input = component.getByTestId('datepicker');
  });

  test('Make sure there are a button, a label and a datepicker input', () => {
    expect(component.getByRole('button')).toBeInTheDocument();
    expect(
      component.getByLabelText('Select a picture by date:', {
        selector: 'input',
      })
    ).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  test('Make sure the datepicker input has the default values', () => {
    expect(input).toHaveAttribute('max', date);
    expect(input).toHaveAttribute('min', '2018-01-01');
    expect(input).toHaveAttribute('value', date);
  });

  test('Make sure the datepicker should change its value', () => {
    fireEvent.change(input, { target: { defaultValue: '12-05-2020' } });
    expect(input.defaultValue).toBe('12-05-2020');
  });
});
