import { use } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../utils/UseFetch";
import ProdutoSkeleton from "../components/ProdutoSkeleton";

function ProdutosId() {
  const { id } = useParams();
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useFetch("http://localhost:8000/Products/" + id);

  return (
    <div className="produtosId">
      {isLoading && <ProdutoSkeleton/>}
      {products && (
        <article>
          <h2>{products.name}</h2>
          <p>Preço: {products.preço}</p>
          <div className="descricao">{products.descricao}</div>
        </article>
      )}
    </div>
  );
}

export default ProdutosId;
