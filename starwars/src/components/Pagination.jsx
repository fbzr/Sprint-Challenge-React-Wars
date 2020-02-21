import React from 'react';
import styled from 'styled-components';

const PaginationNav = styled.nav`
    margin: 10px 0 30px;
`

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
    padding: ${({currentPage}) => currentPage ? '.8rem 1rem' : '.5rem .75rem'};
    height: 100%;
    text-decoration: none;

    background-color: ${ ({currentPage}) => currentPage ? `rgba(0,0,0, 0.8)` : `rgba(255,255,255, 0.8)` };
    color: ${ ({currentPage}) => currentPage ? `rgb(255,255,255)` : `rgb(0,0,0)` };
    cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};

    transition-property: background-color, color, padding;
    transition-duration: 200ms;

    &:hover {
        background-color: ${({disabled, currentPage}) => (disabled || currentPage) ? '' : 'rgba(0,0,0,0.6)'};
        color: ${({disabled}) => (disabled) ? '#000' : '#fff' };
    }
`

const Pagination = ({ postsPerPage, totalPosts, changePage, currentPage }) => {
    
    const pageNumbers = [];
    const lastPage = totalPosts > 0 ? Math.ceil(totalPosts / postsPerPage) : 1;

    for (let i = 1; i <= lastPage; i++) {
        pageNumbers.push(i);
    }

    const handleClick = (e, pageNumber) => {
        e.preventDefault();
        if(pageNumber > 0 && pageNumber <= lastPage) {
            changePage(pageNumber);
        }
    }

    return (
        <PaginationNav>
            <LinksList>
                <PageLinkItem>
                    <Link onClick={e => handleClick(e, currentPage-1)} href='!#' disabled={currentPage===1}>Prev</Link>
                </PageLinkItem>
                {pageNumbers.map(number => (
                    <PageLinkItem key={number}>
                        <Link onClick={e => handleClick(e, number)} href='!#' currentPage={currentPage===number}>
                            {number}
                        </Link>
                    </PageLinkItem>
                ))}
                <PageLinkItem>
                    <Link onClick={e => handleClick(e, currentPage+1)} href='!#' disabled={currentPage===lastPage}>Next</Link>
                </PageLinkItem>
            </LinksList>
        </PaginationNav>
    )
}

export default Pagination
