import React from "react";
import styled from "styled-components";
import Carousel from "components/Carousel";

const CategoryContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
`;

const Header = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 0.5rem;
`;

const Title = styled.h2`
    background-color: ${({titleBackground}) => titleBackground ? titleBackground : 'transparent'};
    color: var(--white-texts);
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 2rem;
    margin-right: 0.5rem;
    padding: 0.5rem 0.2rem;
    white-space: nowrap;

    @media(min-width: 500px) {
        font-size: 2rem;
        line-height: 2.4375rem;
    }
`;

const Description = styled.p`
    color: var(--white-texts);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1rem;

    @media(min-width: 500px) {
        font-size: 1rem;
        line-height: 1.125rem;
    }
`;

const Category = ({ data, title, description, color }) => {
    return (
        data.length > 0 &&
        <CategoryContainer>
            <Header>
                <Title titleBackground={color}>{title}</Title>
                <Description>{description}</Description>
            </Header>

            <Carousel data={data} />
        </CategoryContainer>
    );
};

export default Category;