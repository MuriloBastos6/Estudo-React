import React from "react";

function ProdutosList({ produtos, title, handleDelete }) {
  return (
    <div className="produtos-list">
      <h2>{title}</h2>
      {produtos.map(({ id, name, image, peso, cod }) => (
        <div className="produtos-preview" key={id}>
          <img className="imagens" src={image} alt={name} />
          <h2>{name}</h2>
          <p>Saco com:{peso}</p>
          <p>Código:{cod}</p>
          <button onClick={() => handleDelete(id)}>Deletar item</button>
        </div>
      ))}
    </div>
  );
}

export default ProdutosList;
