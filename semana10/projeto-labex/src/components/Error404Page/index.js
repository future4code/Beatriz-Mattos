import React from "react";
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';

const ErrorPageContainer = styled.div`
  margin: 0;
`

const ErrorPageContent = styled.div`
  padding: 15px;
  height: auto;
`

const ButtonGoBackHome = styled.button`
  cursor: pointer;
  margin: 10px;
  padding: 10px;
  border-radius: 20px;
  background-color: darkorange;

  :hover {
    font-weight: bolder;
  }
`

const ErrorPageTitle = styled.h2`
  color: darkmagenta;
  // text-shadow: 1px 1px 2px grey, 0 0 25px cadetblue, 0 0 5px darkblue;
`

const ErrorPageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const CatGif404 = styled.img`
  width: 50%;
`

const ErrorPage = () => {
  const history = useHistory();

  const goBackHome = () => {
    history.push('/')
  }

  return (
    <ErrorPageContainer>

    

    <ErrorPageContent>

      <ErrorPageBox>

        <ErrorPageTitle>Erro 404</ErrorPageTitle>

        <p>Oops! Parece que o que você procurava já não está mais aqui...</p>

        <CatGif404 src='https://hakcess.com/assets/404.gif' />

        <ButtonGoBackHome onClick={goBackHome}>Voltar para Home</ButtonGoBackHome>

      </ErrorPageBox>
      
    </ErrorPageContent>

    <Footer />

    </ErrorPageContainer>
  );
};

export default ErrorPage;