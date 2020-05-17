import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const ItemContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 1px solid gray;

    :hover{
        background-color: #d3e4e5;
    }
`

const ItemAvatar = styled.img`
    border-radius: 50%;
    margin-right: 8px;
    max-height: 30px;
    max-width: 30px;
`

{/*nesta função, é recebida a props do MatchListPage*/ }
function MatchListItem(props) {
  const profile = props.profile;

  return (

    <ItemContainer>

      <ItemAvatar src={profile.photo} />

      <p>{profile.name}</p>

    </ItemContainer>

  );
}

export default MatchListItem;