import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';


const HomePageContainer = styled.div`
`

const HomePageContent = styled.div`
`

const SectionInitial = styled.div`
`

const SectionTrips = styled.div`
`

const ButtonGoToForm = styled.button`
`

const ShowProducts = styled.div`
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

                    <h3>Encontre as melhores viagens espaciais</h3>
                    <ButtonGoToForm onClick={goToApplicationForm2}>Quero me inscrever!</ButtonGoToForm>

                </SectionInitial>

                <SectionTrips>
                    <h5>Confira alguns de nossos serviços!</h5>

                    <ShowProducts>
                        <img src='https://picsum.photos/110/110?a=1' />
                        <p>texto</p>

                        <img src='https://picsum.photos/110/110?a=2' />
                        <p>texto</p>

                        <img src='https://picsum.photos/110/110?a=3' />
                        <p>texto</p>

                        <img src='https://picsum.photos/110/110?a=4' />
                        <p>texto</p>

                        <img src='https://picsum.photos/110/110?a=5' />
                        <p>texto</p>

                        <img src='https://picsum.photos/110/110?a=6' />
                        <p>texto</p>
                    </ShowProducts>

                </SectionTrips>

            </HomePageContent>

            <Footer />

        </HomePageContainer>
        
    );
};

export default HomePage;