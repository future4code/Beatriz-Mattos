import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    background-color: gray;
    display: flex;
    justify-content: center;
`

const FooterContent = styled.div`
`

const Footer = () => {
    
    return (
        <FooterContainer>
            <FooterContent>
                <p>Footer!</p>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;