import { useState, useEffect } from "react";
import ProdutosList from "./ProdutosList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const [produtos, setProdutos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/Products")
        .then((res) => res.json())
        .then((data) => {
          setProdutos(data);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsError(err);
          setIsLoading(false);
          console.log(err);
        });
    }, 2000);
  }, []);

  return (
    <div>
      {isError && (
        <div className="erro-card">
          <p className="erro-msg">
            <span>! </span>{isError.message}
          </p>
        </div>
      )}
      {isLoading && (
        <div className="notch-container">
          <FontAwesomeIcon icon={faCircleNotch} className="loading-notch" />
        </div>
      )}
      {produtos && <ProdutosList produtos={produtos} title="Feijões" />}
    </div>
  );
}
