import React from 'react';
import styled from 'styled-components';

const LinksList = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
`

const PageLinkItem = styled.li`
    font-size: 1.6rem;
`

const Link = styled.a`
    border: 1px solid #dee2e6;
    padding: .5rem .75rem;
    height: 100%;
    text-decoration: none;

    background-color: ${ ({currentPage}) => currentPage ? `rgba(0,0,0, 0.8)` : `rgba(255,255,255, 0.8)` };
    color: ${ ({currentPage}) => currentPage ? `rgb(255,255,255)` : `rgb(0,0,0)` }
`

const Pagination = ({ postsPerPage, totalPosts, changePage, currentPage }) => {
    
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav>
            <LinksList>
                {pageNumbers.map(number => (
                    <PageLinkItem key={number}>
                        <Link onClick={() => changePage(number)} href='!#' currentPage={currentPage===number}>
                            {number}
                        </Link>
                    </PageLinkItem>
                ))}
            </LinksList>
        </nav>
    )
}

export default Pagination
