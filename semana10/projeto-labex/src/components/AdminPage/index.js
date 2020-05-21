import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const AdminPageContainer = styled.div`
`

const AdminPageContent = styled.div`
`


const AdminPage = () => {
    const history = useHistory();

    const endSession = () => {
        history.push('/')
    }

    const createTrip = () => {
        history.push('/trips/create')
    }

    const tripsList = () => {
        history.push('/trips/list')
    }

    const tripsDetails = () => {
        history.push('/trips/details')
    }

    return (
        <AdminPageContainer>

        <h3>Seja bem vindo, admin!</h3>

        <AdminPageContent>

            <button onClick={createTrip}>Criar viagem</button>
            <button onClick={tripsList}>Listar todas as viagens</button>
            <button onClick={tripsDetails}>Verificar inscrições</button>

            <button onClick={endSession}>Sair</button>

        </AdminPageContent>

        </AdminPageContainer>
    );
};

export default AdminPage;