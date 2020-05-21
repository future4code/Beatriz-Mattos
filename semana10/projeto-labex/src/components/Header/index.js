import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
`

const Header = () => {
    const history = useHistory();

    const goToHomePage = () => {
        history.push('/')
    }
    
    const goToApplicationForm = () => {
        history.push('/application-form');
    }

    const goToLoginPage = () => {
        history.push('/login');
   }

    return (
        <HeaderContainer>
            <h3>LabeX</h3>

            <button onClick={goToHomePage}>Home</button>
            <button onClick={goToApplicationForm}>Inscreva-se</button>
            <button onClick={goToLoginPage}>Login</button>
        </HeaderContainer>
    );
};

export default Header;