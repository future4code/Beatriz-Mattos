import React from 'react';
import styled from 'styled-components';
import CadastroUsuario from './components/CadastroUsuario';
import ListaUsuarios from './components/ListaUsuarios';

const ContainerPrincipal = styled.main`
  margin: 0;
`

const BotaoAlteraPagina = styled.button`
  background-color: darksalmon;
  font-weight: bolder;
  border-radius: 30px;
  margin-top: 30px;
  margin-left: 20px;
  padding: 5px 10px;
`

class App extends React.Component {
  state = {
    paginaAtual: 'CADASTRO'
  }

  onClickMudarPagina = () => {
    const proximaPagina = this.state.paginaAtual === 'CADASTRO' ? 'LISTA' : 'CADASTRO';
    this.setState({ paginaAtual: proximaPagina });
  };

  render() {
    return (
      <ContainerPrincipal>

          <BotaoAlteraPagina onClick={this.onClickMudarPagina}>

            {this.state.paginaAtual === 'CADASTRO' ? 'Ir para a página de lista' : 'Voltar para a página de cadastro'}

          </BotaoAlteraPagina>

            {this.state.paginaAtual === 'CADASTRO' ? (<CadastroUsuario />) : (<ListaUsuarios />)}

      </ContainerPrincipal>

    );
  }
}

export default App;
