import React, { useState, useRef } from 'react';
import classes from './DatePicker.module.css';
import useHttp from '../../utils/hooks/useHttp';

const DatePicker = () => {
  const date = new Date().toLocaleDateString('en-CA');
  const [inputDate, setInputDate] = useState(date);
  const { fetchData } = useHttp();
  const datePickerInput = useRef();

  const getPictureByDate = (evt) => {
    evt.preventDefault();
    const dateValue = datePickerInput.current.value;
    setInputDate(dateValue);
    fetchData(dateValue);
  };

  return (
    <div className={classes['datepicker-control']}>
      <form onSubmit={getPictureByDate}>
        <label htmlFor="datepicker">Select a picture by date:</label>
        <input
          type="date"
          id="datepicker"
          name="datepicker"
          defaultValue={inputDate}
          min="2018-01-01"
          max={date}
          ref={datePickerInput}
        ></input>
        <button type="submit" className={classes['send-btn']} name="search">
          Search
        </button>
      </form>
    </div>
  );
};

export default DatePicker;
