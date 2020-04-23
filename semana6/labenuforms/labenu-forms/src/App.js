import React from 'react';

import './App.css';
import Etapa1 from './components/Etapa1'
import Etapa2 from './components/Etapa2'
import Etapa3 from './components/Etapa3'
import Final from './components/Final'

class App extends React.Component {
  state = {
    etapaAtual: 1
  }


  renderEtapa = () => {
    switch (this.state.etapaAtual) {
      case 1:
        return <Etapa1 />;

      case 2:
        return <Etapa2 />;

      case 3:
        return <Etapa3 />;

      case 4:
        return <Final />;

      default:
        return <Final />;
    }
  };


  proximaEtapa = () => {
    this.setState({ etapaAtual: this.state.etapaAtual + 1 });

  }

  render() {
    return (
      <div className='App'>
        {this.renderEtapa()}
        {this.state.etapaAtual !== 4 && (<button onClick={this.proximaEtapa}>Próxima etapa >>></button>)}
      </div>
    );
  }
}

export default App;