import React from 'react';
import classes from './Header.module.css';
import { logo } from './logo';
import DatePicker from '../DatePicker/DatePicker';

const Header = () => {
  return (
    <header className={classes.header}>
      {logo}

      <h1 className={classes['apod-app-titile']}>
        Astronomy Picture of the Day
      </h1>

      <DatePicker />
    </header>
  );
};

export default Header;
