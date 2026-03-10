import React from "react";

function ProdutosList({produtos, title}) {
  return (
    <div className="produtos-list">
      <h2>{title}</h2>
      {produtos.map((produto) => (
        <div className="produtos-preview" key={produto.id}>
          <img className="imagens" src={produto.image} alt={produto.name} />
          <h2>{produto.name}</h2>
          <p>Saco com:{produto.peso}</p>
          <p>Código:{produto.cod}</p>
        </div>
      ))}
    </div>
  );
}

export default ProdutosList;
