import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    margin: 0;
    background-image: linear-gradient(#27063d, #1c0966, #992e00);
    display: flex;
    flex-wrap: wrap;
`

 const LogoLabeX = styled.img`
    display: flex;
    justify-content: start;
    margin-right: 40%;
    align-self: start;
    padding: 10px;
 `

 const MenuContainer = styled.div`
    margin: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
 `

 const GoToHome = styled.li`
    border: none;
    letter-spacing: 3px;
    list-style-type: none;
    padding-right: 20px;
    font-size: 1.2em;

    :hover {
        letter-spacing: 5px;
        font-weight: bolder;
        cursor: pointer;
    }
 `

 const GoToForm = styled.li`
    border: none;
    letter-spacing: 3px;
    list-style-type: none;
    padding-right: 20px;
    font-size: 1.2em;

    :hover {
     letter-spacing: 5px;
     font-weight: bolder;
     cursor: pointer;
    }
 `

 const GoToLogin = styled.li`
    border: none;
    letter-spacing: 3px;
    list-style-type: none;
    padding-right: 20px;
    font-size: 1.2em;

    :hover {
        letter-spacing: 5px;
        font-weight: bolder;
        cursor: pointer;
    }
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
            <LogoLabeX src='https://i.imgur.com/UI7SJ6B.png' />

            <MenuContainer>

            <GoToHome onClick={goToHomePage}>HOME</GoToHome>
            <GoToForm onClick={goToApplicationForm}>INSCREVA-SE</GoToForm>
            <GoToLogin onClick={goToLoginPage}>LOGIN</GoToLogin>

            </MenuContainer>
        </HeaderContainer>
    );
};

export default Header;