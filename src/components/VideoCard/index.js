import React from "react";
import styled from "styled-components";
import defaultThumbnail from 'assets/default-thumbnail.png';
import { Link } from "react-router-dom";

const CardContainer = styled.div`
    padding: 0 0.2rem;
`;

const LinkStyled = styled(Link)`
    display: inline-block;
`;

const Thumbnail = styled.img`
    width: 100%;
`;

const InfoContainer = styled.div`
    padding: 0.2rem;
`;

const Title = styled.h3`
    color: var(--white-texts);
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.1875rem;
    margin-bottom: 0.3rem;
`;

const Description = styled.p`
    color: var(--white-texts);
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1rem;
`;

const VideoCard = ({ urlVideo, urlThumbnail, title, description }) => {

    return (
        <CardContainer>
            <LinkStyled to={urlVideo}>
            <Thumbnail src={urlThumbnail.length <= 5 ? defaultThumbnail : urlThumbnail} alt={`Imagem de capa do vídeo ${title}.`} />
            </LinkStyled>

            <InfoContainer>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </InfoContainer>
        </CardContainer>
    );
};

export default VideoCard;