import React, { useContext } from 'react';
import classes from './ApodCover.module.css';
import { StoreContext } from '../../utils/store/StoreContext';

const ApodCover = () => {
  const { apiData } = useContext(StoreContext);

  return (
    <section
      className={classes['image-cover']}
      style={{ backgroundImage: `url(${apiData.url})` }}
      data-testid="imagecover"
    ></section>
  );
};

export default ApodCover;
