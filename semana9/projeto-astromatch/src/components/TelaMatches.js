import React from 'react';
import styled from 'styled-components';
import BotaoTelaMatches from './BotaoTelaMatches';
import Header from './Header';

const BoxTelaMatches = styled.div`
    
`

const BotaoRetorno = styled.button`
    padding: 10px;
    margin-left: 15px;
    margin-top: 15px;
`

const FotoUsuario = styled.img`
    border-radius: 100px;
    max-width: 50px;
    max-height: 50px;

`
const ContainerAllMatches = styled.div`
    display: flex;
    flex-direction: columns;
    flex-wrap: wrap;
    padding: 15px;
`

const ContainerTitulo = styled.div`
    display: flex;
    padding-left: 30vh;
`

const NomeUsuario = styled.div`
    padding-left: 5vh;
    padding-top: 3vh;
`

function TelaMatches() {
  return (
    <BoxTelaMatches>

        <Header />

        <BotaoRetorno>retornar</BotaoRetorno>

        <ContainerTitulo>

            <h3>It's a match!</h3>

        </ContainerTitulo>

        <ContainerAllMatches>

            <FotoUsuario src='https://picsum.photos/50/50' />
            <NomeUsuario>User x</NomeUsuario>

        </ContainerAllMatches>

    </BoxTelaMatches>

  );
}

export default TelaMatches;