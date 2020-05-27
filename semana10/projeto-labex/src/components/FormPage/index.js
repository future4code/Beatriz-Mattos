import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

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

const Button = styled.button`
  cursor: pointer;
  margin: 20px;
  padding: 5px;
  border-radius: 20px;
  font-weight: bolder;
  background-color: darkorange;
`


//função de estado que armazena os nomes e valores do formulário
const useForm = initialValues => {
  const [form, setForm] = useState(initialValues);

  //handler unificado utilizando o 'name' para atualizar os dados de forma dinâmica
  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

    return { form, onChange };

};

function FormPage() {
  const { form, onChange } = useForm({
    name: '',
    age: '',
    applicationText: '',
    profession: '',
    country: '',
    trip: ''
  });

  const handleInputChange = e => {
    const { value, name } = e.target;

    onChange(name, value);
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  const SubmitMessage = e => {
    if (form.age >= 18 && form.applicationText === true) {
      alert('Sua inscrição foi enviada para aprovação!');
    };
  }

  return (
    <FormPageContainer>

      <Header />

      <FormPageContent>

        <SubscriptionForm>

          <h3>Formulário de inscrição</h3>

          <form onSubmit={handleSubmit}>

            <Label>Nome:</Label>
            <Input
              value={form.name}
              onChange={handleInputChange}
              name='name'
              type='text'
              placeholder='Digite o seu nome'
              pattern='[A-Z a-z]{3,}'
              title='O nome deve conter 3 letras no mínimo.'
              required
            />

            <br />

            <Label>Idade:</Label>
            <Input
              value={form.age}
              onChange={handleInputChange}
              name='age'
              type='number'
              min='18'
              title='Apenas maiores de idade podem ir para o espaço.'
              placeholder='Digite a sua idade'
              required
            />

            <br />

            <Label>Por que você é um bom candidato?</Label>
            <Input
              value={form.applicationText}
              onChange={handleInputChange}
              name='applicationText'
              type='text'
              minlenght='30'
              //pattern='^[a-z]{30,}$'
              title='No mínimo 30 caracteres e impecável.'
              placeholder='Seja criativo!'
              required
            />

            <br />

            <Label>Profissão:</Label>
            <Input
              value={form.profession}
              onChange={handleInputChange}
              name='profession'
              type='text'
              placeholder='Digite a sua profissão'
              required
            />

            <br />
            
            <Label>País:</Label>
            <Input
              value={form.country}
              onChange={handleInputChange}
              name='country'
              type='text'
              placeholder='Digite o seu país'
              required
            />

            <br />

            <Label>Viagem:</Label>
            <Input
              value={form.trip}
              onChange={handleInputChange}
              name='trip'
              type='text'
              placeholder='Digite o destino dos sonhos'
              required
            />

            <br />

            <Button onClick={SubmitMessage}>ENVIAR</Button>

          </form>


        </SubscriptionForm>

      </FormPageContent>


      <Footer />
    </FormPageContainer>
  );
};

export default FormPage;