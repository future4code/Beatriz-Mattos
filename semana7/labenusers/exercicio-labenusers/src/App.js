import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CadastroUsuario from './components/CadastroUsuario'

const ContainerPrincipal = styled.main`

`

class App extends React.Component {
  state = {
    nome: '',
    email: '',
  }

  //funções
  onChangeNomeUsuario = e => {
    this.setState({ nome: e.target.value })
    console.log(this.state.nome)
  }

  onChangeEmailUsuario = e => {
    this.setState({ email: e.target.value })
    console.log(this.state.email)
  }


  onClickSalvar = () => {
    this.registraUsuario();
  }

  registraUsuario = () => {
    const body = {
      nome: this.state.nome,
      email: this.state.email,
    }

    //requisição POST createUser
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
      body,
      {
        headers: {
          Authorization: 'Beatriz-Mattos-Julian',
        }
      }
    )
      .then(resposta => {
        alert('Cadastro realizado com sucesso!')
      })
      .catch(error => {
        alert('Errrrrrrrou!')
        console.log(error.response)
      })
  }

  render() {
    return (
      <ContainerPrincipal>

        <CadastroUsuario
          onChangeNomeUsuario={this.onChangeNomeUsuario}
          onChangeEmailUsuario={this.onChangeNomeUsuario}
          onClickSalvar={this.onClickSalvar}
        />

      </ContainerPrincipal>
    );
  }
}

export default App;
