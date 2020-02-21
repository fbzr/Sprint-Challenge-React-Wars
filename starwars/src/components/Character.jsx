import React from 'react'

const Character = ({ character }) => {
    const { name, height, mass, hair_color, skin_color, birth_year } = character;
    return (
        <div>
            <h3>{name}</h3>
            <p>Birth year: {birth_year}</p>
            <p>Height: {height}</p>
            <p>Mass: {mass}</p>
            <p>Hair: {hair_color}</p>
            <p>Skin: {skin_color}</p>
        </div>
    )
}

export default Character
