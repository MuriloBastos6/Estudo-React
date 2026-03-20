import React from "react";
import { Link } from "react-router-dom";

function ProdutosList({ produtos, title }) {
  return (
    <div className="produtos-list">
      <h2 className="titulo-pag">{title}</h2>
      {produtos.map(({ id, name, image, peso, cod, preço}) => (
        <div className="produtos-preview" key={id}>
          <Link to={`/produtos/${id}`}>
          <img className="imagens" src={image} alt={name} />
          <h2>{name}</h2>
          <p><span>{preço}</span> Sc: {peso}</p>
          <p>Código:{cod}</p></Link>
        </div>
        
      ))}
    </div>
  );
}

export default ProdutosList;
