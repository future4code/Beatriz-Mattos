import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
    border-radius: 20px;
    padding: 10px;
    background-color: white;
    cursor: pointer;

    :hover {
        font-weight: bolder;
        letter-spacing: 1px;
        border: 1px outset black;
    }
`

const ButtonContainer = styled.div`
    
`

function ResetButton() {
    const onClickReset = () => {
        window.confirm('Are you sure?')
        axios
            .put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-mattos-julian/clear')
            .then(response => {
                console.log(response)
            })
    }

    return (
        <ButtonContainer>

            <Button onClick={onClickReset}>Reset all</Button>

        </ButtonContainer>
    );
}

export default ResetButton;