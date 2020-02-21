import React from 'react';
import Character from './Character';

const Display = ({ characters }) => {
    return (
        <section>
            {characters.map((character, i) => <Character key={i} character={character} />)};
        </section>
    )
}

export default Display
