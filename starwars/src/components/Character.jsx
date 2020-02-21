import React from 'react'
import styled from 'styled-components';

const CharacterDiv = styled.div`
    padding: 20px;
    width: 16%;
    background-color: rgba(255,255,255, 0.8);
    border-radius: 15px;
    margin-bottom: 20px;
`

const Name = styled.h3`
    font-size: 1.8rem;
    min-height: 70px;
    padding-bottom: 20px;
`

const InfoText = styled.p`
    font-size: 1.4rem;
    margin-bottom: 7px;
`

const Character = ({ character }) => {
    const { name, height, mass, hair_color, skin_color, birth_year } = character;
    return (
        <CharacterDiv>
            <Name>{name}</Name>
            <InfoText>Birth year: {birth_year}</InfoText>
            <InfoText>Height: {height}</InfoText>
            <InfoText>Mass: {mass}</InfoText>
            <InfoText>Hair: {hair_color}</InfoText>
            <InfoText>Skin: {skin_color}</InfoText>
        </CharacterDiv>
    )
}

export default Character
