
import Navbar from './components/Navbar';
import Home from  './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 
'react-router-dom';
import ProdutosId from './pages/ProdutosId';
import AdiconarProduto from './pages/AdiconarProduto';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/produtos/:id" element={<ProdutosId />} />
            <Route path="/adiconarProduto" element={<AdiconarProduto />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

 
