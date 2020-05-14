import React from 'react';
import styled from 'styled-components';
import BotaoTelaMatches from './BotaoTelaMatches';

const ContainerHeader = styled.div`
    position: top;
    bottom: 0;
    right: 0;
    left: 0;
    width: 500px;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
`

 const LogoAstromatch = styled.img`
    max-width: 35vh;
    max-height: auto;
    margin-left: 10px;
    display: flex;
    margin-left: 130px;
 `


function Header() {
    return (
        <ContainerHeader>
            <LogoAstromatch src='https://i.imgur.com/fq6QSmV.png' />

        </ContainerHeader>
    );
}

export default Header;