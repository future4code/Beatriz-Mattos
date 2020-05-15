import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Buttons from './components/Buttons';

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
  //box-shadow: 0 0.07vw 50px violet, inset 0px 0vw 8px 0px blue;
  grid-template-columns: 1fr;
  `
{/*anotação: em grid-template-columns, eu poderia usar: 1fr (fração inteira), auto, 500px(que é o width total do content;
e se quisesse um espaço à direita, poderia usar 400px que é -100px do tamanho total do width) */}

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

  {/*aqui 'puxo' o endpoint GET Profile To Choose e atualizo as imagens no content*/}
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

        {/* {showAllMatches} ? (

          <PageMatches
          matches={listAllMatches}
          />

          ) : (

            <Main>

              <Cards
              profile={showProfile}
              />

              <Buttons
              profile={showProfile}
              next={nextProfile}
              />

            </Main>
          ) */}

      </ContentApp>

      {/* <p>Entediado? Resete tudo aqui:</p> */}
      <ButtonReset
        onClick={''}>
          Reset all my swipes and matches
      </ButtonReset>

    </ContainerApp>

  );

}

export default App;