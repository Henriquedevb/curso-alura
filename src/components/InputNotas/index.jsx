import React, { useState } from 'react';
import './style.css';

const InputNotas = (props) => {
  const [dados, setDados] = useState({
    title: 'titulo',
    text: 'texto',
  });

  function handleInput(event) {
    const inputText = event.target.value;
    setDados({ ...dados, title: inputText });
  }

  function handleTextArea(event) {
    const textArea = event.target.value;
    setDados({ ...dados, text: textArea });
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.criarNotas(dados.title, dados.text);
  }
  return (
    <section className="container-nota">
      <form className="form-section" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Insira o titulo da sua nota"
          onChange={handleInput}
        />
        <br />
        <textarea
          onChange={handleTextArea}
          name=""
          id=""
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

export default InputNotas;
