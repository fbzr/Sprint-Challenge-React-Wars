import React from 'react';
import styled from 'styled-components';

const TitleDiv = styled.div`
    text-align: center;
    background: rgba(0,0,0,.8);
    color: #fff;
    padding: 35px 0;
    margin-bottom: 20px;
`

const Header = () => {
    return (
        <TitleDiv>
            <h1>REACT WARS</h1>
            <h4>Profiles</h4>
        </TitleDiv>
    )
}

export default Header
