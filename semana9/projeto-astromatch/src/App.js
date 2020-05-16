import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Buttons from './components/Buttons';
import PageMatches from './components/PageMatches';
import Cards from './components/Cards';

{/* styleds dos containers principais*/}
const ContainerApp = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  background-color: black;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
const ContentApp = styled.div`
  width: 500px;
  height: 90vh;
  margin-top: 10px;
  border-radius: 15px;
  border: 1px outset grey;
  background-color: white;
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 1fr;
`

{/*styleds do header*/}
const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid cadetblue;
  padding: 0 10px;
`

const LogoAstromatch = styled.img`
  height: 100%;
`

const ButtonReset = styled.button`
  border-radius: 30px;
  margin: 10px;
  cursor: pointer;
`

const ShowMatches = styled.button`
  cursor: pointer;
`

{/*arrow function c/ props p/ abrir state funcional*/}
const App = (props) => {
  const [showProfile, setShowProfile] = useState([]);
  const [listAllMatches, setListAllMatches] = useState([]);
  const [nextProfile, setNextProfile] = useState(false);
  const [showAllMatches, setShowAllMatches] = useState(false);

  {/*'setando' os states funcionais*/}
  const showMatches = () => {
    setShowAllMatches(!showAllMatches);
  }

  const seeNextProfile = () => {
    setNextProfile(!nextProfile);
  }

  {/*aqui 'puxo' o endpoint GET Profile To Choose e retorno um perfil ainda não visto*/}
  useEffect(() => {
    Axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-mattos-julian/person')
      .then(response => {

        setShowProfile(response.data.profile)
        console.log(showProfile);

      })
      .catch(err => {
        console.log(err);
      })

    {/*aqui 'puxo' o endpoint GET Get Matches para ser exibido na seção de matches*/}
    Axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-mattos-julian/matches')
      .then(response => {

        setShowAllMatches(response.data.matches)
        console.log(showAllMatches);

      })
      .catch(err => {
        console.log(err);
      })

  }, [nextProfile])

  {/*dentro do return, há todo o conteúdo exibido na página e a renderização condicional entre as mesmas */}
  return (
    <ContainerApp className="App">

      <ContentApp>

        <Header>

          <LogoAstromatch src='https://i.imgur.com/fq6QSmV.png' />

          <ShowMatches onClick={showMatches}>match+</ShowMatches>

        </Header>

      
        <Cards
        profile={showProfile}/>

        <Buttons
        profile={showProfile}
        nextPerson={nextProfile}
        onClick={props.onClickAccept}
        onClick={props.onClickDecline}
        />

         {/* {showAllMatches} ? (


          <PageMatches
          matches={listAllMatches}
         /> */}

      </ContentApp>

      <ButtonReset
        onClick={''}>
          Reset all my swipes and matches
      </ButtonReset>

    </ContainerApp>

  );

}

export default App;