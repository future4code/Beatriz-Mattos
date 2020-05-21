import React from "react";
import styled from 'styled-components';

import Header from '../Header';
import Footer from '../Footer';

const FormPageContainer = styled.div`
`

const FormPageContent = styled.div`
`

const FormPage = () => {
  return (
    <FormPageContainer>

      <Header />

      <FormPageContent>
        <div>Formulário de inscrição aqui</div>
      </FormPageContent>
      
      <Footer />
      
    </FormPageContainer>
  );
};

export default FormPage;