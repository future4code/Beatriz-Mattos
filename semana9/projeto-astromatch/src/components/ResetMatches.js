import React from 'react';
import styled from 'styled-components';

const BotaoReset = styled.button`
    margin: 0;
    display: flex;
    position: fixed;
    margin-top: 90vh;
    margin-left: 40vh;
`

function ClearAll() {
    return (
        <BotaoReset>Limpar tudo</BotaoReset>
    );
}

export default ClearAll;