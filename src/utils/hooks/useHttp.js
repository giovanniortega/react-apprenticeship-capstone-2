import { useCallback, useContext } from 'react';
import { StoreContext } from '../store/StoreContext';

const useHttp = () => {
  const { setApiData, setApiError, setApiIsLoading, setIsStatusScreen } =
    useContext(StoreContext);
  const API_KEY = process.env.REACT_APP_NASA_APIKEY;
  const BASE_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  const fetchData = useCallback(
    async (param) => {
      setApiIsLoading(true);
      setIsStatusScreen(true);
      setApiError(null);
      setApiData({});

      const dateParam = `&date=${param}`;
      const URL = `${BASE_URL}${param ? dateParam : ''}`;

      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(
            'Something went wrong with images service, please try again!'
          );
        }

        response.json().then((data) => {
          setApiData(data);
          setIsStatusScreen(false);
        });
      } catch (error) {
        setApiIsLoading(false);
        setIsStatusScreen(true);
        setApiError(error.message);
      }

      setApiIsLoading(false);
    },
    [BASE_URL]
  );

  return { fetchData };
};

export default useHttp;
