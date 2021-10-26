import React, { useEffect, useState } from 'react';
import CardNotas from '../CardNotas';
import './style.css';

const ListaNotas = (props) => {
  const teste = {};
  const a = { ...teste, teste: props.notas };
  const arr = [];

  console.log(arr);
  return (
    <div className="container-notas">
      {/* <ul>
        {teste.map((conteudo, index) => (
          <li key={index}>
            <h3>{conteudo.title}</h3>
            <CardNotas>{conteudo.text}</CardNotas>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default ListaNotas;
