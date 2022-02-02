import React from 'react';
import { render, screen } from '@testing-library/react';
import { StoreContext } from '../../utils/store/StoreContext';
import ApodContent from './ApodContent';

const value = {
  apiData: {
    copyright: 'Martin Pugh',
    date: '2021-07-15',
    explanation:
      'In silhouette against a crowded star field along the tail of the arachnalogical constellation Scorpius',
    hdurl: 'https://apod.nasa.gov/apod/image/2107/Dark_Tower_MPRS.jpg',
    media_type: 'image',
    service_version: 'v1',
    title: 'The Dark Tower in Scorpius',
    url: 'https://apod.nasa.gov/apod/image/2107/Dark_Tower_MPRS_1100c.jpg',
  },
};

describe('<ApodContent />', () => {
  let component;
  let image;

  beforeAll(() => {
    component = render(
      <StoreContext.Provider value={value}>
        <ApodContent />
      </StoreContext.Provider>
    );
    image = screen.queryByAltText('The Dark Tower in Scorpius');
  });

  test('Make sure the component print all the text', () => {
    expect(component.getByText(/Martin Pugh/i)).toBeInTheDocument();
    expect(component.getByText(/2021-07-15/i)).toBeInTheDocument();
    expect(
      component.getByText(
        /In silhouette against a crowded star field along the tail of the arachnalogical constellation Scorpius/i
      )
    ).toBeInTheDocument();
    expect(
      component.getByText(/The Dark Tower in Scorpius/i)
    ).toBeInTheDocument();
  });

  test('Make sure there ir an image with a valid ', () => {
    expect(image).toBeDefined();
    expect(image).toHaveAttribute('src', value.apiData.url);
  });
});
