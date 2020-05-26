import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const AdminPageContainer = styled.div`
    margin: 0;
    padding: 15px;
    background-image: linear-gradient(darkmagenta, cadetblue, #dedede, white);
`

const AdminPageContent = styled.div`
    margin: 0;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const WelcomeTitle = styled.h3`
    font-size: 30px;
`

const ContainerButtons = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    width: 30%;
    height: auto;
    padding: 5px;
`

const Button = styled.button`
    cursor: pointer;
    margin: 15px;
    padding: 20px;
    border-radius: 15px;
    font-size: 20px;
    background-color: cadetblue;
    border: 1px outset darkmagenta;

    :hover {
        font-weight: bolder;
        color: darkmagenta;
    }
`

const LogOutButton = styled.button`
    cursor: pointer;
    margin: 20px;
    padding: 10px;
    background-color: grey;
    font-size: 15px;
    border-radius: 15px;
    border: 1px solid black;
    width: 200px;
    display: flex;
    justify-content: center;
    align-self: center;

    :hover {
        font-weight: bolder;
        color: darkred;
    }
`

const AdminPage = () => {
    const history = useHistory();

    const handleLogOut = () => {
        localStorage.clear();
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

            <WelcomeTitle>Seja bem vindo, admin!</WelcomeTitle>

            <AdminPageContent>

                <ContainerButtons>

                    <Button onClick={createTrip}>Criar viagem</Button>
                    <Button onClick={tripsList}>Listar todas as viagens</Button>
                    <Button onClick={tripsDetails}>Verificar inscrições</Button>

                    <LogOutButton onClick={handleLogOut}>Sair</LogOutButton>

                </ContainerButtons>

            </AdminPageContent>

        </AdminPageContainer>
    );
};

export default AdminPage;