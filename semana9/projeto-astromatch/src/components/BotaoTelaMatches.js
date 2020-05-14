import React from 'react';
import styled from 'styled-components';

const BotaoRedirecionador = styled.button `
  padding: 10px;
  margin-right: 15px;
  margin-top: 15px;
`

function BotaoDosMatches() {
    return (
        <div>
            <BotaoRedirecionador>tela matches</BotaoRedirecionador>
        </div>
    );
}

export default BotaoDosMatches;