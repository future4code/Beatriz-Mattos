import React from "react";
import styled from 'styled-components';

const ListTripContainer = styled.div`
  margin: 0;
`

const ListTripContent = styled.div`
  margin: 0;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ListTripBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  border: 1px solid darkmagenta;
  // gap: 10%;
  // padding: 5%;
`

const ListTripsTitle = styled.div`
  font-weight: bolder;
  font-size: 25px;
  display: flex;
  justify-content: center;
  padding-top: 25px;
`

const ListTripsPage = () => {
  return (
    <ListTripContainer>

      <ListTripsTitle>Viagens cadastradas</ListTripsTitle>

    <ListTripContent>

      <ListTripBox>

      <thead>
            <tr>
                <th>Viagem</th>
                <th>Nome do inscrito</th>
                <th>Idade</th>
                <th>Razão</th>
                <th>Profissão</th>
                <th>País</th>
                <th>Aprovação</th>
            </tr>
        </thead>

      </ListTripBox>

    </ListTripContent>

    </ListTripContainer>
  );
};

export default ListTripsPage;