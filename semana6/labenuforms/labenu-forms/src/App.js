import React from 'react';
import './App.css';
import { Etapa1 } from './Components/Etapa1'
import { Etapa2 } from './Components/Etapa2'
import { Etapa3 } from './Components/Etapa3'
import { Final } from './Components/Final'

class App extends React.Component {
  state = {
    etapaAtual: 1
  }


  renderEtapa = () => {
    switch (this.state.etapaAtual) {
      case 1:
        return <Etapa1 />;
        break;

      case 2:
        return <Etapa2 />;
        break;

      case 3:
        return <Etapa3 />;
        break;

      case 4:
        return <Final />;
        break;

      default:
        return <Etapa1 />;
        break;
    }
  }


  proximaEtapa = () => {
    let novaEtapaForm = this.state.etapaAtual + 1;
    this.setState({etapaAtual : novaEtapaForm});
    console.log(this.state.etapaAtual);

  }

  renderBotao = () => {
    switch (this.state.etapaAtual) {
      case 1:
      case 2:
      case 3:
        return <meuBotao onClick={this.proximaEtapa}>Próxima etapa</meuBotao>
    }
  }

  render() {
    return(
      <div>
        {this.renderEtapa}
        {this.renderBotao}
      </div>
      );
  }
}
export default App;