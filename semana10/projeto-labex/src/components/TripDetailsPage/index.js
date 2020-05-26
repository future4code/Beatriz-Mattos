import React from "react";
import styled from 'styled-components';

const TripDetailsContainer = styled.div`
`

const TripDetailsContent = styled.div`
`

const TripDetailsBox = styled.div`
`

const TripDetailsTitle = styled.div`
font-weight: bolder;
font-size: 25px;
display: flex;
justify-content: center;
padding-top: 25px;
`

const TripDetailsPage = () => {
  return (
    <TripDetailsContainer>

      <TripDetailsTitle>Todas as viagens cadastradas</TripDetailsTitle>

      <TripDetailsContent>

        <TripDetailsBox>

        <thead>
            <tr>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Planeta</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Remover</th>
            </tr>
        </thead>

        </TripDetailsBox>
        
      </TripDetailsContent>

    </TripDetailsContainer>
  );
};

export default TripDetailsPage;