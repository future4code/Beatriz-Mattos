import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import ChooseButtons from './ChooseButtons';

const LoadingGif = styled.img`
    width: 100%;
    margin-top: 70px;
`

function ChooseProfilePage() {
    const [profileToChoose, setProfileToChoose] = useState(undefined);

    const getProfileToChoose = () => {

        axios
            .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-mattos-julian/person')
            .then(response => {
                setProfileToChoose(response.data.profile)
            })

    }

    useEffect(() => {
        getProfileToChoose()
    }, []);

    const getUserChoices = (choice) => {
        const body = {
            choice: choice,
            id: profileToChoose.id
        }
        setProfileToChoose(undefined);

        axios
            .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-mattos-julian/choose-person', body)
            .then(response => {
                getProfileToChoose();

            })
    }

    const onClickDecline = () => {
        getUserChoices(false);
    }

    const onClickAccept = () => {
        getUserChoices(true);
    }

    return (

        <div>

            {profileToChoose ?
                (<>
                    <ProfileCard profile={profileToChoose} />
                    <ChooseButtons onClickDecline={onClickDecline} onClickAccept={onClickAccept} />
                </>) : <LoadingGif src='https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif' />
            }


        </div>

    );
}

export default ChooseProfilePage;