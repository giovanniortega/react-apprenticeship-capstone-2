import React from 'react';
import { render, screen } from '@testing-library/react';
import { StoreContext } from '../../utils/store/StoreContext';
import Header from './Header';
import DatePicker from '../DatePicker/DatePicker';

const value = {};

beforeAll(() => {
  render(
    <StoreContext.Provider value={value}>
      <Header />
    </StoreContext.Provider>
  );
});

test('Print a title text in the header', () => {
  expect(screen.getByText('Astronomy Picture of the Day')).toBeInTheDocument();
});

test('Check if the header is printing the DatePicker', () => {
  expect(<DatePicker />).toBeTruthy();
});
