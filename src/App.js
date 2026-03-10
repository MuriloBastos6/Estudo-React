import './App.css';

export default function App() {
 const titulo = "Minha primeira aplicação react";
 const aula = 4;
 const boo = true; // Não é possivel Usar
 const person = {name:"João"}//Não é possivel usar 
 const link = "https://www.google.com.br/"

  return (
    <div className="App">

      <div className='content'>{titulo}</div>
      <p>Aula: {aula}</p>
      <p>{person.name}</p> {/* Assim pode ser usado*/ }
      <a href={link} target="_blank" rel="noopener noreferrer">
        Ir para o Google
      </a>{/*O link desse jeito pode ser udado*/}

      



    
    </div>
  );
}

 
