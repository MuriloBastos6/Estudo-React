
import ProdutosList from "./ProdutosList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { useFetch } from "../utils/UseFetch";

export default function Home() {
const {data: produtos, isLoading, isError, error} = useFetch();

  return (
    <div>
      {isError && (
        <div className="erro-card">
          <p className="erro-msg">
            <span>! </span>{error.message}
          </p>
        </div>
      )}
      {isLoading && (
        <div className="notch-container">
          <FontAwesomeIcon icon={faCircleNotch} className="loading-notch" />
        </div>
      )}
      {produtos && <ProdutosList produtos={produtos} title="Promoções" />}
    </div>
  );
}
