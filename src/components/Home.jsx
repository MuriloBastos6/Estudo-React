import { useState, useEffect } from "react";
import ProdutosList from "./ProdutosList";

export default function Home() {
  const [produtos, setProdutos] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/Products")
      .then((res) => res.json())
      .then((data) => { 
        setProdutos(data);
        console.log(data);
      })

  }, []);

  return (
    <div>
      {produtos && <ProdutosList produtos={produtos} title="Feijões" />}
    </div>
  );
}
