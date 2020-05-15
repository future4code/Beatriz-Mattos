import React, { useState } from 'react';
import styled from 'styled-components';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import CloseIcon from '@material-ui/icons/Close';
import Axios from 'axios';

const BoxButton = styled.div`
    display: flex;
    justify-content: space-around;
`

const HeartButton = styled.button`
    color: green;
`

const XButton = styled.button`
    color: red;
`

const Buttons = (props) => {
    const [loveChoice, setLoveChoice] = useState(true);
    const [dismissChoice, setDismissChoice] = useState(false);

    const chooseProfile = (userId, choiceProfile) => {
        const body = {
            id: userId,
            choice: choiceProfile,
        }

        Axios
            .post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-mattos-julian/choose-person', body)
            .then(response => {
                { props.next() }
            })
            .catch(err => {
                console.log(err);
            })

    }

    const onClickAccept = () => {
        chooseProfile(props.profile.id, loveChoice);
    }

    const onClickDecline = () => {
        chooseProfile(props.profile.id, dismissChoice);
    }


    return (
        <BoxButton>

            <HeartButton
                onClick={onClickAccept}>

                {/* <FavoriteIcon
                    fontSize='large' */}
                />
                ♥
            </HeartButton>

            <XButton
                onClick={onClickDecline}>
                
                {/* <CloseIcon
                    fontSize='large' */}
                />
                    X
            </XButton>

        </BoxButton>
    );
}

export default Buttons;