import React from 'react';
import './style.css';

const CardNotas = (props) => {
  return (
    <div className="card-notas">
      <section>
        <p>{props.children}</p>
      </section>
    </div>
  );
};

export default CardNotas;
