import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        src="/Logo-Saint-png.png"
        alt="Logo com o simbolo da empresa saint-louis"
      />
      <div className="navbar-escrito">
        <h1 className="titulo">
          BOURACHED
          <span>Bastos</span>
        </h1>
        <div className="links">
          <Link className="home" to="/">
            Home
          </Link>
          <Link className="create" to="https://lista-produtos-t.vercel.app/" target="blank">
            Lista Completa
          </Link>
        </div>
      </div>
    </nav>
  );
}
