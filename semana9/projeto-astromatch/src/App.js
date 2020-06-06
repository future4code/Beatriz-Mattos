import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Main from './components/Main';
import ResetButton from './components/ResetButton';

const AppContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(black, cadetblue, white);
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`


function App() {
  return (
    <AppContainer>
      <Main />
      <ResetButton />
    </AppContainer>
  );
}

export default App;