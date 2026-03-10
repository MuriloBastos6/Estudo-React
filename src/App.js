import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

export default function App() {
/* const titulo = "Minha primeira aplicação react";
 const aula = 4;
 const boo = true; // Não é possivel Usar
 const person = {name:"João"}//Não é possivel usar 
 const link = "https://github.com/MuriloBastos6/Estudo-React"
*/
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Home/>
      </main>
    </div>
  );
}

 
