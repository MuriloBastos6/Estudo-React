import { useState, useEffect } from "react";
import ProdutosList from "./ProdutosList";

export default function Home() {
  const [produtos, setProdutos] = useState([
    {
      name: "Feijão de corda",
      image:
        "",
      peso: "25KG",
      cod: 4851,
      id: 1,
      cat: "Feijao",
    },
    {
      name: "Feijão de carioca",
      peso: "25KG",
      cod: 4852,
      id: 2,
      cat: "Feijão",
    },
    {
      name: "Feijão Branco",
      peso: "25KG",
      cod: 4853,
      id: 3,
      cat: "Feijão",
    },
  ]);

  const handleDelete = (id) => {
    const produtoNovo = produtos.filter((produto) => produto.id !== id);
    setProdutos(produtoNovo);
  };

  useEffect(() => {
  console.log("useEffect foi executado");
  console.log(produtos);
  }, []);

  return (
    <div>
      <ProdutosList
        produtos={produtos}
        title="Feijões"
        handleDelete={handleDelete}
      />
    </div>
  );
}
