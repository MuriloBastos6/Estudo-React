

export default function Navbar() {
    return (
        <nav className="navbar">
           <h1 className="titulo">Bourached</h1>
           <div className="links">
           <a className="home" href="/">Home</a>
           <a className="create" href="/create">Novo produto</a>
           </div>
        </nav>
    );
}

