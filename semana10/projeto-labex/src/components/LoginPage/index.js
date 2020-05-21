import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

const LoginPageContainer = styled.div`
`

const LoginPageContent = styled.div`
`

const ButtonGetLogged = styled.button`
`

const LoginPage = () => {
  const history = useHistory();

  const goToAdminPage = () => {
    history.push('/admin-page')
  }

  return (
    <LoginPageContainer>

      <Header />

      <LoginPageContent>
        <div>Área do administrador</div>

        <ButtonGetLogged onClick={goToAdminPage}>Vamos lá!</ButtonGetLogged>

      </LoginPageContent>

      <Footer />

    </LoginPageContainer>
  );
  
};

export default LoginPage;