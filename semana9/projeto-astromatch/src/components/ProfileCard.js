import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const ProfileCardContainer = styled.div`
    margin: 16px;
    border: 1px outset lightgray;
    border-radius: 20px;
`

const ProfilePicture = styled.img`
    width: 100%;
    display: block;
    max-height: 350px;
    border-radius: 20px;
`

const ProfileInfo = styled.div`
    padding: 0 16px;
`

{/*nesta função, é recebida a props do ChooseProfilePage*/ }
function ProfileCard(props) {

    const profile = props.profile

    return (
        <ProfileCardContainer>

            <ProfilePicture src={profile.photo} />

            <ProfileInfo>

                <h3>{profile.name}, {profile.age}</h3>

                <p>{profile.bio}</p>

            </ProfileInfo>


        </ProfileCardContainer>
    );
}

export default ProfileCard;