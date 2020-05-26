import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';

import Header from '../Header';
import Footer from '../Footer';

const FormPageContainer = styled.div`
  margin: 0;
`

const FormPageContent = styled.div`
  margin: 0;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SubscriptionForm = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: auto;
  border: 1px solid darkmagenta;
  flex-direction: column;
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

const SubscriptionButton = styled.button`
  cursor: pointer;
  margin: 20px;
  padding: 5px;
  border-radius: 20px;
  font-weight: bolder;
  background-color: darkorange;
`

function FormPage() {
  // const [name, setName] = useState('');
  // const [age, setAge] = useState('');
  // const [question, setQuestion] = useState('');
  // const [profession, setProfession] = useState('');
  // const [country, setCountry] = useState('');
  // const [trip, setTrip] = useState('');

  // const Subscription = () => {
  //   axios
  //   .post('https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/:id/apply')
  //   .then(response => {

  //   })
  // }

  return (
    <FormPageContainer>

      <Header />

      <FormPageContent>

        <SubscriptionForm>

          <h3>Formulário de inscrição</h3>

          <Label for='name'>Nome:</Label>
          <Input type='text' placeholder='Digite o seu nome'/>

          <Label for='age'>Idade:</Label>
          <Input type='number' placeholder='Digite a sua idade'/>

          <Label for='question'>Por que você é um bom candidato?</Label>
          <Input type='textarea' placeholder='Pense bem...'/>

          <Label for='occupation'>Profissão:</Label>
          <Input type='text' placeholder='Digite a sua profissão'/>

          <Label for='country'>País:</Label>
          <Input type='text' placeholder='Digite o seu país'/>

          <Label for='trip'>Viagem:</Label>
          <Input type='' placeholder='Digite o destino dos sonhos'/> //depois trocar p/ input que gera todos os destinos ja estabelecidos

          <SubscriptionButton>ENVIAR</SubscriptionButton>

        </SubscriptionForm>

      </FormPageContent>


      <Footer />
    </FormPageContainer>
  );
};

export default FormPage;