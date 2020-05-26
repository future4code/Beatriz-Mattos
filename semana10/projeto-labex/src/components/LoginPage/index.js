import React from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

const LoginPageContainer = styled.div`
  margin: 0;
`

const LoginPageContent = styled.div`
  margin: 0;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginBox = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 40%;
  height: auto;
  border: 1px solid darkmagenta;
  padding: 5px;
`

const Label = styled.label`
  padding-top: 10px;
  color: midnightblue;
`

const Input = styled.input`
  width: 50%;
  padding-bottom: 10px;
`


const ButtonGetLogged = styled.button`
  cursor: pointer;
  margin: 20px;
  padding: 5px;
  border-radius: 20px;
  font-weight: bolder;
  background-color: darkorange;

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

        <LoginBox>

          <h3>Área do administrador</h3>

          <Label>E-mail:</Label>
          <Input type='email' />

          <Label>Senha:</Label>
          <Input type='password' />
          
          <ButtonGetLogged onClick={goToAdminPage}>Vamos lá!</ButtonGetLogged>

        </LoginBox>

      </LoginPageContent>

      <Footer />

    </LoginPageContainer>
  );
  
};

export default LoginPage;