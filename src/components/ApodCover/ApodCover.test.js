import React from 'react';
import { render } from '@testing-library/react';
import { StoreContext } from '../../utils/store/StoreContext';
import ApodCover from './ApodCover';

const value = {
  apiData: {
    url: 'https://apod.nasa.gov/apod/image/2107/Dark_Tower_MPRS_1100c.jpg',
  },
};

describe('<ApodCover />', () => {
  let component;

  beforeAll(() => {
    component = render(
      <StoreContext.Provider value={value}>
        <ApodCover />
      </StoreContext.Provider>
    );
  });

  test('Make sure there the right background is being applied to the section', () => {
    expect(component.getByTestId('imagecover')).toHaveAttribute(
      'style',
      `background-image: url(${value.apiData.url});`
    );
  });
});
