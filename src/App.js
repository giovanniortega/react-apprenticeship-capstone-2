import React, { useEffect, useContext } from 'react';
import ApodCover from './components/ApodCover/ApodCover';
import ApodContent from './components/ApodContent/ApodContent';
import StatusScreen from './components/StatusScreen/StatusScreen';
import useHttp from './utils/hooks/useHttp';
import Header from './components/Header/Header';
import { StoreContext } from './utils/store/StoreContext';

const App = () => {
  const { fetchData } = useHttp();
  const { isStatusScreen } = useContext(StoreContext);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Header />
      {isStatusScreen && <StatusScreen />}
      {!isStatusScreen && (
        <>
          <ApodCover />
          <ApodContent />
        </>
      )}
    </>
  );
};

export default App;
