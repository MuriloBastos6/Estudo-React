import ProdutosList from "../components/ProdutosList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../utils/UseFetch";
import ErrorMensagem from "../components/ErrorMensagem";

export default function Home() {
  const { data: produtos, isLoading, isError, error } = useFetch("http://localhost:8000/Products");

  return (
    <div>
      {isError && <ErrorMensagem message={error.message} />}
      {isLoading && (
        <div className="notch-container">
          <FontAwesomeIcon icon={faCircleNotch} className="loading-notch" />
        </div>
      )}
      {produtos && <ProdutosList produtos={produtos} title="Promoções" />}
    </div>
  );
}
