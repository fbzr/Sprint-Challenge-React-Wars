import React from 'react'

const Display = ({ characters }) => {
    return (
        <section>
            {characters.forEach((character, i) => <Card key={i} character={character} />)};
        </section>
    )
}

export default Display
