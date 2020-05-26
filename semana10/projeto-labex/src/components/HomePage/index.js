import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';


const HomePageContainer = styled.div`
    margin: 0;
`

const HomePageContent = styled.div`
    margin: 0;
`

const SectionInitial = styled.div`
    margin: 0;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background: url('https://thumbs.gfycat.com/AnchoredLoneCygnet-size_restricted.gif');
    `

    
    const ButtonGoToForm = styled.button`
    position: absolute;
    margin-top: 70px;
    border-radius: 20px;
    padding: 5px 10px;
    font-size: 1em;
    background-image: linear-gradient(darkmagenta, darkorange);
    border: none;
    cursor: pointer;
    font-weight: bolder;
    `
    
    const TitleSectionInitial = styled.h3`
    text-align: center;
    font-size: 2.0em;
    color: darkmagenta;
    font-family: arial;
    `
    
    const SectionTrips = styled.div`
        margin: 0;
        background-color: #23184d;
        height: 70vh;
    `

    const TitleSectionTrips = styled.h3`
        text-align: left;
        margin: 0px;
        padding-top: 25px;
        padding-left: 20px;
        font-size: 2.0em;
        color: black;
        font-family: arial;
    `

    const ShowProducts = styled.div`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 10%;
        padding: 5%;
    `
    
    const HomePage = () => {
    const history = useHistory();

    const goToApplicationForm2 = () => {
        history.push('/application-form');
    }

    return (
        <HomePageContainer>
            <Header />
                    
            <HomePageContent>

                <SectionInitial>

                    <TitleSectionInitial>Encontre as melhores viagens espaciais!</TitleSectionInitial>

                    <ButtonGoToForm onClick={goToApplicationForm2}>Quero me inscrever</ButtonGoToForm>

                </SectionInitial>

                <SectionTrips>
                    <TitleSectionTrips>Conheça alguns de nossos serviços...</TitleSectionTrips>

                    <ShowProducts>
                        <img src='https://picsum.photos/110/110?a=1' />

                        <img src='https://picsum.photos/110/110?a=2' />

                        <img src='https://picsum.photos/110/110?a=3' />

                        <img src='https://picsum.photos/110/110?a=4' />

                        <img src='https://picsum.photos/110/110?a=5' />

                        <img src='https://picsum.photos/110/110?a=6' />

                        <img src='https://picsum.photos/110/110?a=7' />

                        <img src='https://picsum.photos/110/110?a=8' />

                    </ShowProducts>

                </SectionTrips>

            </HomePageContent>

            <Footer />

        </HomePageContainer>
        
    );
};

export default HomePage;