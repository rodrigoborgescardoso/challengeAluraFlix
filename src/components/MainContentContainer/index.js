import React from "react";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    padding: ${({title}) => title === 'Nova categoria' ? '2rem 0.9rem 0 0.9rem' : '2rem 2.5rem 0 2.5rem' }; 

    @media(min-width: 500px) {
        padding: 2rem 2.5rem 0 2.5rem;
    }

`;

const Title = styled.h2`
    color: var(--white-texts);
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 4.0625rem;
    margin-bottom: 4rem;
    text-align: center;
`;

const MainContentContainer = ({ title, children }) => {
    return (
        <Container title={title}>
            {title ? <Title>{title}</Title> : ''}
            {children}
        </Container>
    );
};

export default MainContentContainer;