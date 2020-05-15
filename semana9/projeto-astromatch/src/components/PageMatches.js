import React from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const BoxMatches = styled.div`
`
const UserContainer = styled.div`
`
const Photo = styled.img`

`
const Name = styled.p`
`

const Matches = (props) => {
    const param = true;

    return(
        <BoxMatches>

        {props.matches.map((profile) => {
            return (
                <UserContainer>

                    <Photo src={profile.photo} />
                    <Name>{profile.name}</Name>

                </UserContainer>
            );
        })}

        </BoxMatches>
    );
}

export default Matches;