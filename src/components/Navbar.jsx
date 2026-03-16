export default function Navbar() {
  return (
    <nav className="navbar">
      <img
        src="Logo-Saint-png.png"
        alt="Logo com o simbolo da empresa saint-louis"
      />
      <div className="navbar-escrito">
        <h1 className="titulo">
          BOURACHED
          <span>Bastos</span>
        </h1>
        <div className="links">
          <a className="home" href="/">
            Lista Completa
          </a>
          <a className="create" href="/create">
            WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
}
