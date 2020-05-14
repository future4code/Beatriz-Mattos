import React from 'react';
import TelaInicial from './components/TelaInicial';
import styled from 'styled-components';
import ResetMatches from './components/ResetMatches'
import TelaMatches from './components/TelaMatches'

const ContainerGeral = styled.div`
  height: 95vh;
  width: 500px;
  display: flex;

  margin: 15px auto;
  border: 1px solid black;
  border-radius: 20px;
`

function App() {
  return (
    <ContainerGeral className="App">

      {/* <TelaInicial /> */}

      <TelaMatches />
      
    {/* <div>
      <ResetMatches />
    </div> */}

    </ContainerGeral>

  );
}

export default App;