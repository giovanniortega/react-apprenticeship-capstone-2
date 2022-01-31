import React, { useContext } from 'react';
import classes from './StatusScreen.module.css';
import { StoreContext } from '../../utils/store/StoreContext';
import stars from '../../stars.jpeg';

const StatusScreen = () => {
  const { apiIsLoading, apiError } = useContext(StoreContext);

  return (
    <section
      className={classes['status-container']}
      style={{ backgroundImage: `url(${stars})` }}
    >
      {apiIsLoading && <p>Data is loading...</p>}
      {apiError && <p>{apiError}</p>}
    </section>
  );
};

export default StatusScreen;
