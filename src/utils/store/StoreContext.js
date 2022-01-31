import React, { useState } from 'react';

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [apiData, setApiData] = useState({});
  const [apiError, setApiError] = useState(null);
  const [apiIsLoading, setApiIsLoading] = useState(false);
  const [isStatusScreen, setIsStatusScreen] = useState(false);

  const store = {
    apiData,
    setApiData,
    apiError,
    setApiError,
    apiIsLoading,
    setApiIsLoading,
    isStatusScreen,
    setIsStatusScreen,
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
