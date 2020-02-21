import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
    text-align: center;
    margin: 30px 0;
`

const Header = () => {
    return (
        <div>
            <Title>React Wars</Title>
        </div>
    )
}

export default Header
