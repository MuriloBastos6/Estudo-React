import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
            if (!res.ok) 
                throw Error("Não foi possível carregar os dados");
            return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(true);
          setError(err);
          setIsLoading(false);
        });
    }, 2000);
  }, [url]);

  return {data, isLoading, isError, error};

};