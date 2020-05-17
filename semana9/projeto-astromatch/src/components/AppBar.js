import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import WhatshotIcon from '@material-ui/icons/Whatshot';

const AppBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;
    align-items: center;
    padding: 0 8px;
`

const LogoAstromatch = styled.img`
  height: 50px;
`

const ArrowBack = styled(ArrowBackIcon)`
    color: white;
    cursor: pointer;

    :hover {
        color: cadetblue;
    }
`

const MatchFireIcon = styled(WhatshotIcon)`
    color: darkred;
    cursor: pointer;

    :hover {
        color: red;
        cursor: pointer;
    }
`

{/*nesta função, é recebida a props do Main*/ }
function AppBar(props) {

    return (
        <AppBarContainer>

            <ArrowBack onClick={props.goToChooseProfilePage}>Choose</ArrowBack>

            <LogoAstromatch src='https://i.imgur.com/fq6QSmV.png' />

            <MatchFireIcon onClick={props.goToMatchListPage}>List Matches</MatchFireIcon>

        </AppBarContainer>
    );
}

export default AppBar;