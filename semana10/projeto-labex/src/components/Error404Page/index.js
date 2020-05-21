import React from "react";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

const ErrorPageContainer = styled.div`
`

const ErrorPageContent = styled.div`
`

const ButtonGoBackHome = styled.button`
`

const ErrorPage = () => {
  const history = useHistory();

  const goBackHome = () => {
    history.push('/')
  }

  return (
    <ErrorPageContainer>

      <Header />

    <ErrorPageContent>

      <h2>Error 404</h2>
      <p>Ops! Parece que o que você procurava não está mais aqui...</p>
      <ButtonGoBackHome onClick={goBackHome}>Voltar para Home</ButtonGoBackHome>
      
    </ErrorPageContent>

    <Footer />

    </ErrorPageContainer>
  );
};

export default ErrorPage;