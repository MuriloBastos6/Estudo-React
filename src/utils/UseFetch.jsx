import { useState, useEffect } from "react";

export const useFetch = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/Products")
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
  }, []);

  return {data, isLoading, isError, error};

};