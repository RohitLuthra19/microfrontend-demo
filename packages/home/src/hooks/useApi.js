// useApi.js
import { useEffect, useState } from "react";

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchApi = () => {
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setData(json);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { loading, data, error };
};

export default useApi;
