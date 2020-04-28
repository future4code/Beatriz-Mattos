import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class App extends React.Component() {
  state = {
    nome: '',
    email: '',
  }

  render() {
    return (
      <div>
        <button>Ir para página de registro</button>

        <label>Nome: </label>
        <input></input>

        <label>E-mail: </label>
        <input></input>
      </div>
    );
  }
}

export default App;
