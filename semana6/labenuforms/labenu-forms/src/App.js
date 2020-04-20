import React from 'react';
import './App.css';
import { Etapa1 } from './Components/Etapa1'

class App extends React.Component {
  state = {
    etapaAtual: 1
  }

  
  renderEtapa = () => {
    switch(this.state.etapaAtual) {
      case 1:
        return <Etapa1 />;
        break;

    }
  }

  renderBotao = () => {
    switch(this.state.etapaAtual) {
      case 1:
      case 2:
      case 3:
    }
  }
}

export default App;