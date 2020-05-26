import React from "react";
import styled from 'styled-components';

const CreateTripContainer = styled.div`
  margin: 0;
  background-color: #dedede;
`

const CreateTripContent = styled.div`
  margin: 0;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CreateTripBox = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: 1px solid darkmagenta;
  margin-bottom: 70px;
`

const Label = styled.label`
  padding-top: 10px;
  color: midnightblue;
`

const Input = styled.input`
  width: 50%;
  padding-bottom: 10px;
`

const InputDate = styled.input`
  width: 25%;
`

const InputNumber = styled.input`
  width: 10%;
`

const Select = styled.select`
`

const Button = styled.button`
  cursor: pointer;
  margin: 20px;
  padding: 6px;
  border-radius: 10px;
  background-color: cadetblue;

  :hover {
    font-weight: bolder;
  }
`

const CreateTripTitle = styled.div`
  font-weight: bolder;
  font-size: 25px;
  display: flex;
  justify-content: center;
  padding-top: 25px;
`

const CreateTripPage = () => {
  return (
    <CreateTripContainer>

      <CreateTripTitle>Cadastrar nova viagem</CreateTripTitle>

      <CreateTripContent>

        <CreateTripBox>

          <Label>Nome: </Label>
          <Input type='text' />

          <Label>Planeta: </Label>
          <Select>
            <option value=''>Escolha um planeta</option>
            <option value='Marte'>Marte</option>
            <option value='Jupiter'>Júpiter</option>
            <option value='Terra'>Terra</option>
            <option value='Plutao'>Plutão</option>
          </Select>

          <Label>Data: </Label>
          <InputDate type='date' />

          <Label>Descrição: </Label>
          <Input type='text' />

          <Label>Duração: </Label>
          <InputNumber type='number' />

          <Button>OK</Button>

        </CreateTripBox>


      </CreateTripContent>

    </CreateTripContainer>
  );
};

export default CreateTripPage;