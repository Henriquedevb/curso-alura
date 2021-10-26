import React, { useState } from 'react';
import './style.css';

const FormNotas = (props) => {
  const [dados, setDados] = useState({
    title: '',
    text: '',
  });

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setDados({ ...dados, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!dados.title && !dados.text) {
      alert('Por favor, insira uma nota');
      return;
    }

    props.criarNotas(dados.title, dados.text);
    setDados({ title: '', text: '' });
  }

  return (
    <section className="container-nota">
      <form className="form-section" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Insira o titulo da sua nota"
          name="title"
          id="title"
          value={dados.title}
          onChange={handleChange}
        />
        <br />
        <textarea
          onChange={handleChange}
          value={dados.text}
          name="text"
          id="text"
          cols="30"
          rows="10"
          placeholder="Escreva sua nota aqui.."
        ></textarea>
        <br />
        <div className="container-btn">
          <button type="submit" className="btn-notas">
            Criar nota
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormNotas;
