import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import axios from "axios";

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
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/beatriz-mattos-julian';

// pegou props de quem?
const LoginPage = () => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${baseUrl}/login`, body);

      localStorage.setItem('token', response.data.token);
      history.push('/admin-page');
    }
    catch (e) {
      alert('Login falhou :(');
    }
  };

  return (
    <LoginPageContainer>

      <Header />

      <LoginPageContent>

        <LoginBox>

          <h3>Área do administrador</h3>

          <Label>E-mail:</Label>
          <Input
            type='email'
            value={email}
            placeholder='Insira o e-mail'
            onChange={e => setEmail(e.target.value)}
          />

          <Label>Senha:</Label>
          <Input
            type='password'
            value={password}
            placeholder='Insira a senha'
            onChange={e => setPassword(e.target.value)}
          />
          
          <ButtonGetLogged onClick={handleLogin}>Vamos lá!</ButtonGetLogged>

        </LoginBox>

      </LoginPageContent>

      <Footer />

    </LoginPageContainer>
  );
  
};

export default LoginPage;