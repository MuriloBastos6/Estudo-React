
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../utils/UseFetch";
import ProdutoSkeleton from "../components/ProdutoSkeleton";
import ErrorMensagem from "../components/ErrorMensagem";

function ProdutosId() {
  const { id } = useParams();
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useFetch("http://localhost:8000/Products/" + id);

  const navigate = useNavigate();
  const handleDelete = () => {
    fetch("http://localhost:8000/Products/" + id, {
      method: "DELETE",
    }).then(() => navigate("/"));
  };

  return (
    <div className="produtosId">
      {isError && <ErrorMensagem message={error.message} />}
      {isLoading && <ProdutoSkeleton/>}
      {products && (
        <article>
          <h2>{products.name}</h2>
          <p>Preço: {products.preço}</p>
          <div className="descricao">{products.descricao}</div>
          <button  onClick={handleDelete}className="btn">Excluir Produto</button>
        </article>
      )}
    </div>
  );
}

export default ProdutosId;
