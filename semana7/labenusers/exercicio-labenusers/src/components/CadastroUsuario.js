import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const BoxFormulario = styled.div`
     display: grid;
     gap: 10px;
     justify-content: center;
`

const LabelNome = styled.label`
    color: darksalmon;
    font-weight: bold;
`

const LabelEmail = styled.label`
    color: darksalmon;
    font-weight: bold;
`

const InputNome = styled.input`
    border-radius: 30px;
`

const InputEmail = styled.input`
    border-radius: 30px;
`

const BotaoSalvar = styled.button`
    margin-top: 10%;
    border-radius: 30px;
    background-color: salmon;
    padding: 5px 10px;
    font-weight: bolder;
`

class CadastroUsuario extends React.Component {
    state = {
        nome: '',
        email: '',
    }

    //funções
    onChangeNomeUsuario = e => {
        this.setState({ nome: e.target.value });
        //console.log(this.state.nome)
    }

    onChangeEmailUsuario = e => {
        this.setState({ email: e.target.value })
        //console.log(this.state.email)
    }


    onClickSalvar = () => {
        this.registraUsuario();
    }

    //requisição POST createUser
    registraUsuario = () => {
        const body = {
            name: this.state.nome,
            email: this.state.email,
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users',
            body,
            {
                headers: {
                    Authorization: 'Beatriz-Mattos-Julian',
                }
            }
        ).then(resposta => {
                window.alert('Cadastro realizado com sucesso!')
            }).catch(error => {
                window.alert('Ops! Verifique se todos os campos estão corretos, ou se o seu user já não está página de lista.')
            });

            this.setState({ nome: '', email: '' });
    };

    render() {
        return (

            <BoxFormulario>

                <h2>Cadastro</h2>

                <LabelNome>Nome: </LabelNome>
                <InputNome
                    type={'text'}
                    placeholder={'Insira o nome'}
                    onChange={this.onChangeNomeUsuario}
                />

                <LabelEmail>E-mail:</LabelEmail>
                <InputEmail
                    type={"text"}
                    placeholder={'Insira o e-mail'}
                    onChange={this.onChangeEmailUsuario}
                />

                <BotaoSalvar onClick={this.onClickSalvar}>Salvar</BotaoSalvar>

            </BoxFormulario>

        );
    }
}

export default CadastroUsuario;