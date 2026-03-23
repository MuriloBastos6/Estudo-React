import { faCircleNotch } from "@fortawesome/free-solid-svg-icons/faCircleNotch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdiconarProduto() {
  const [name, setName] = useState("Teste");
  const [preço, setPreço] = useState("");
  const [descricao, setDescricao] = useState("");
  const [image, setImage] = useState("");
  const [peso, setPeso] = useState("");
  const [cat, setCat] = useState("");
  const [cod, setCod] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navegate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submeter");
    const novoProduto = { name, preço, descricao, image, peso, cat, cod };

    setIsLoading(true);
    setTimeout(() => {
      fetch("http://localhost:8000/Products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novoProduto),
      }).then(() => setIsLoading(false), navegate("/"));
    }, 1000);
  };

  return (
    <div className="create">
      <h2>Adicionar Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome do Produto:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Imagem do produto:</label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label>Preço:</label>
        <input
          type="text"
          value={preço}
          onChange={(e) => setPreço(e.target.value)}
          required
        />
        <label>Peso:</label>
        <select value={peso} onChange={(e) => setPeso(e.target.value)} required>
          <option value="500gr">500gr</option>
          <option value="1KG">1KG</option>
          <option value="3KG">3KG</option>
          <option value="4KG">4KG</option>
          <option value="5KG">5KG</option>
          <option value="10KG">10KG</option>
          <option value="15KG">15KG</option>
          <option value="20KG">20KG</option>
          <option value="25KG">25KG</option>
          <option value="30KG">30KG</option>
          <option value="45,65KG">45,65KG</option>
          <option value="50KG">50KG</option>
        </select>
        <label>Código do produto:</label>
        <input
          type="number"
          value={cod}
          onChange={(e) => setCod(e.target.value)}
          required
        />

        <label>
          Categoria do Produto:
          <select value={cat} onChange={(e) => setCat(e.target.value)} required>
            <option value="Arroz">Amendoim & Castanhas</option>
            <option value="Arroz">Arroz</option>
            <option value="Sucrilhos">Sucrilhos</option>
            <option value="Chás">Chás</option>
            <option value="Farinhas">Farinhas</option>
            <option value="Grãos">Grãos</option>
            <option value="Panificações">Panificações</option>
            <option value="Especiarias">Especiarias</option>
            <option value="Frutas">Frutas</option>
            <option value="Sementes">Sementes</option>
            <option value="Produtos naturais">Produtos naturais</option>
            <option value="Refrigerantes">Refrigerantes</option>
            <option value="Oleo vegetal">Oleo vegetal</option>
            <option value="Goma pronta">Goma pronta</option>
            <option value="Salgadinho Snacks">Salgadinho Snacks</option>
            <option value="Doces">Doces</option>
            <option value="Potes">Potes</option>
          </select>
        </label>
        <label>Descrição:</label>
        <textarea
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        ></textarea>

        <button>
          {isLoading ? (
            <FontAwesomeIcon icon={faCircleNotch} className="loading-notch" />
          ) : (
            "Adicionar Produto"
          )}
        </button>
      </form>
    </div>
  );
}

export default AdiconarProduto;
