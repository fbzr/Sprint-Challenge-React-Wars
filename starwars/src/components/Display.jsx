import React from 'react';
import Character from './Character';
import styled from 'styled-components';

const DisplayCharacters = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    @media screen and (max-width: 500px) {
        justify-content: center;
    }
`
const Display = ({ characters, loading }) => {
    if (loading) {
        return <div>LOADING...</div>
    }
    return (
        <DisplayCharacters>
            {characters.map((character, i) => <Character key={i} character={character} />)};
        </DisplayCharacters>
    )
}

export default Display
