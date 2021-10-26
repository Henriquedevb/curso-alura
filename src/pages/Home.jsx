import React, { useState } from 'react';
import InputNotas from '../components/InputNotas';
import ListaNotas from '../components/ListaNotas';

const Home = (props) => {
  const [teste, setTeste] = useState([]);

  function criarNotas(title, text) {
    const novaNota = { title, text };
    setTeste(novaNota);
  }
  return (
    <div>
      <h1>NOTAS</h1>
      <InputNotas criarNotas={criarNotas} />
      <ListaNotas notas={teste} />
    </div>
  );
};

export default Home;
