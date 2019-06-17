import React from 'react';
import './App.css';
import Pagina from './pagina';
import Cesar from './cifradecesar';
import Vigenere from './cifradevigenere';
import Transposicao from './cifradetransposicao';

function App() {
  return (
    <div className="App">
        <Pagina />
        <Cesar />
        <Vigenere />
        <Transposicao />
    </div>
  );
}

export default App;
