import React from 'react';
import { render } from '@testing-library/react';
import StatusScreen from './StatusScreen';
import { StoreContext } from '../../utils/store/StoreContext';

test('Print a loaging message if the value key is true', () => {
  const value = {
    apiIsLoading: true,
    apiError: null,
  };

  const component = render(
    <StoreContext.Provider value={value}>
      <StatusScreen />
    </StoreContext.Provider>
  );

  expect(component.getByText('Data is loading...')).toBeInTheDocument();
});

test('Print an error message if there is an error', () => {
  const value = {
    apiIsLoading: false,
    apiError: 'Something went wrong with images service, please try again!',
  };

  const component = render(
    <StoreContext.Provider value={value}>
      <StatusScreen />
    </StoreContext.Provider>
  );

  expect(
    component.getByText(
      'Something went wrong with images service, please try again!'
    )
  ).toBeInTheDocument();
});
