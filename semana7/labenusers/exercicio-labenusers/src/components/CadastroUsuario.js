import React from 'react'
import styled from 'styled-components'

const BoxFormulario = styled.div`
`

const LabelNome = styled.label`
`

const LabelEmail = styled.label`
`

const InputNome = styled.input`
`

const InputEmail = styled.input`
`

const BotaoSalvar = styled.button`
`

class CadastroUsuario extends React.Component {
    state = {

    }

    render() {
        return (

            <BoxFormulario>

                <h2>Cadastro</h2>

                <LabelNome>Nome: </LabelNome>
                <InputNome
                    type={'text'}
                    onChange={this.props.onChangeNomeUsuario}
                />

                <LabelEmail>E-mail:</LabelEmail>
                <InputEmail
                    type={"text"}
                    onChange={this.props.onChangeEmailUsuario}
                />

                <BotaoSalvar onClick={this.props.onClickSalvar}>Salvar</BotaoSalvar>

            </BoxFormulario >

        );
    }
}

export default CadastroUsuario;