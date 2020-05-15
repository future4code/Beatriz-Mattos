import React, { useState } from 'react';
import styled from 'styled-components';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import CloseIcon from '@material-ui/icons/Close';
import Axios from 'axios';

const BoxButton = styled.div`
    display: flex;
    justify-content: space-around;
`

// const HeartButton = styled(FavoriteIcon)`
//     background-color: green;
// `

// const XButton = styled(CloseIcon)`
//     background-color: red;
// `

const HeartButton = styled.button`
    background-color: green;
`

const XButton = styled.button`
    background-color: red;
`

const Buttons = (props) => {
    const [loveChoice, setLoveChoice] = useState(true);
    const [dismissChoice, setDismissChoice] = useState(false);

    const chooseProfile = (userId, choiceProfile) => {
        const body = {
            id: userId,
            choice: choiceProfile,
        }

        {/*aqui 'puxo' o endpoint POST Choose Person*/}
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

            <XButton
                onClick={onClickDecline}>
                {/* <CloseIcon
                    fontSize='large' /> */}
                    X
            </XButton>

            <HeartButton
                onClick={onClickAccept}>
                    {/* <FavoriteIcon
                    fontSize='large' /> */}
                    ♥
            </HeartButton>


        </BoxButton>
    );
}

export default Buttons;