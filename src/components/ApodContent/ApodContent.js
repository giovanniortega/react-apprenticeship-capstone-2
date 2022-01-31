import React, { useContext } from 'react';
import { StoreContext } from '../../utils/store/StoreContext';
import classes from './ApodContent.module.css';

const ApodContent = () => {
  const { apiData } = useContext(StoreContext);

  const isImage =
    Object.keys(apiData).length != 0 &&
    apiData.url.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi);
  const isVideo =
    Object.keys(apiData).length != 0 &&
    apiData.url.match(
      /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/
    );

  return (
    <section className={classes['apod-container']}>
      <div className={classes['apod-content']}>
        <h1>{apiData.title}</h1>
        {isImage && <img src={apiData.url} alt={apiData.title} />}
        {isVideo && (
          <iframe
            width="420"
            height="315"
            name={apiData.title}
            title={apiData.title}
            src={apiData.url}
          ></iframe>
        )}
        <div className={classes['apod-caption']}>
          <p>{apiData.date}</p>
          <p>Author: {apiData.copyright}</p>
        </div>
        <div className={classes['apod-description']}>
          <p>{apiData.explanation}</p>
        </div>
      </div>
    </section>
  );
};

export default ApodContent;
