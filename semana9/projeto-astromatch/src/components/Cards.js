import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const BoxCards = styled.div`
    display: flex;
    margin-top: 15px;
`

const ContentCards = styled.div`

`

const ContainerPhotos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Photo = styled.img`
    max-width: 50%;
    max-height: 50%;
    // display: flex;
    // justify-content: center;
    // align-items: center;
`

const Information = styled.div`

`

const Card = (props) => {

    const dataProfile = props.profile;

    return (
        <BoxCards>

            <ContentCards>

                <ContainerPhotos>
                    <Photo src={dataProfile.photo}/>
                </ContainerPhotos>

                <Information>
                    <h3>{dataProfile.name}, {dataProfile.age}</h3>
                    <p>{dataProfile.bio}</p>
                </Information>

            </ContentCards>

        </BoxCards>
    );
}

export default Card;