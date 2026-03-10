const handleClick = (e) => {
  console.log("Clicou", e);
};
const handleClickAgain = (name) => {
  console.log("Clicou novamente", name);
};
export default function Home() {
  return (
    <div>
      <h2 className="text-main">Nossos Produtos</h2>
      <button onClick={handleClick}>Clique Aqui</button>
      <button onClick={() => handleClickAgain('Murilo')}>Clique Aqui</button>
    </div>
  );
}
