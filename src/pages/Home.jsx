import React, { useState } from 'react';
import InputNotas from '../components/FormNotas';
import ListaNotas from '../components/ListaNotas';

const Home = (props) => {
  const [notas, setNotas] = useState([]);

  function criarNotas(title, text) {
    const novaNota = { title, text };
    setNotas([...notas, novaNota]);
  }

  return (
    <div>
      <h1>NOTAS</h1>
      <InputNotas criarNotas={criarNotas} />
      <ListaNotas notas={notas} />
    </div>
  );
};

export default Home;
