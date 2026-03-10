import {useState} from "react";

export default function Home() {
   const [nome , setNome] = useState("Murilo");
    //let nome = "Murilo";  
  const handleClick = (e) => {
    console.log(nome);
    setNome("Bourached");
  };

  return (
    <div>
      <h2 className="text-main">Nossos Produtos</h2>
      <button onClick={handleClick}>Clique Aqui</button>
      <p>{nome}</p>
    </div>
  );
}
