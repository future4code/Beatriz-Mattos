import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import BotaoNegativo from './BotaoNegativo';
import BotaoPositivo from './BotaoPositivo';
import ResetMatches from './ResetMatches';
import BotaoTelaMatches from './BotaoTelaMatches';

const BoxTelaInicial = styled.div`
`

const ContentMatch = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 20px;
    flex-basis: 100% 
`
const ContentImg = styled.img`
    display: flex;
    border-radius: 20px;
    height: 70%;

`

const ContentOptions = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px;
`

function TelaInicial() {
    return (

        <BoxTelaInicial>

            <Header />
            <BotaoTelaMatches />
            
            <ContentMatch>
            <p>estou no ContentMatch!</p>
            
            <ContentImg src='https://picsum.photos/200/300' />

            </ContentMatch>

            <ContentOptions>

                <BotaoNegativo />

                <BotaoPositivo />

            </ContentOptions>

        </BoxTelaInicial>

    );
}

export default TelaInicial;
