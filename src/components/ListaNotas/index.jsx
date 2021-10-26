import React, { useEffect, useState } from 'react';
import CardNotas from '../CardNotas';
import './style.css';

const ListaNotas = (props) => {
  console.log(props.notas);

  return (
    <div className="container-notas">
      <ul>
        {props.notas.map((conteudo, index) => (
          <li key={index}>
            <h3>{conteudo.title}</h3>
            <CardNotas>{conteudo.text}</CardNotas>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaNotas;
