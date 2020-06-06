import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import MatchListItems from '../components/MatchListItems';

const ListContainer = styled.div`
  padding: 8px;
`

function MatchListPage() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios
      .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-mattos-julian/matches')
      .then(response => {

        setMatches(response.data.matches)

      })
      .catch(err => {
        console.log(err);
      })

  }, [])

  return (

    <ListContainer>

      <h3>It's a match!</h3>

      {/* cada match criado, trará o perfil para a MatchListPage através desse map*/}
      {matches.map(profile => {

        return <MatchListItems
          profile={profile}
        />

      })}

    </ListContainer>
  );
}

export default MatchListPage;