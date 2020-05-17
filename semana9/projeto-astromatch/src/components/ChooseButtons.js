import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 15px;
`

const HeartButton = styled(FavoriteIcon)`
    padding: 5px;
    color: #30e203;
    border: outset 2px #30e203;
    border-radius: 100%;
    cursor: pointer;

    :hover {
        color: black;
        background-color: #30e203;
        padding: 6px;
`

const XButton = styled(CloseIcon)`
    padding: 5px;
    color: #ff2020;
    border: outset 2px #ff2020;
    border-radius: 100%;
    cursor: pointer;

    :hover {
        color: black;
        background-color: #ff2020;
        padding: 6px;
`

{/*nesta função, é recebida a props do ChooseProfilePage*/}
function ChooseButtons(props) {

    return (
    <ButtonsContainer>

      <XButton
        onClick={props.onClickDecline}>

            <CloseIcon
              fontSize='large' />

      </XButton>

      <HeartButton
        onClick={props.onClickAccept}>

            <FavoriteIcon
              fontSize='large' />

      </HeartButton>

    </ButtonsContainer>
  );
}

export default ChooseButtons;