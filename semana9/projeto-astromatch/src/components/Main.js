import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import AppBar from './AppBar';
import ChooseProfilePage from './ChooseProfilePage';
import MatchListPage from './MatchListPage';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 20px;
    width: 400px;
    height: 600px;
    margin: 30px;
    background-color: white;
`


function Main() {
    const [selectedPage, setSelectedPage] = useState('choose-profile-page')

    const renderSelectedPage = () => {

        switch (selectedPage) {
            case 'choose-profile-page':
                return <ChooseProfilePage />

            case 'match-list-page':
                return <MatchListPage />

            default:
                return <ChooseProfilePage />

        }
    }

    const goToChooseProfilePage = () => {
        setSelectedPage('choose-profile');
    }

    const goToMatchListPage = () => {
        setSelectedPage('match-list-page');
    }

    return (
        <MainContainer>

            <AppBar
                goToChooseProfilePage={goToChooseProfilePage}
                goToMatchListPage={goToMatchListPage}
            />

            {renderSelectedPage()}

        </MainContainer>
    );
}

export default Main;