import React from "react";
import styled from "styled-components";
import bannerImage from 'assets/banner.png';

const BannerContainer = styled.section`
    background-image: url(${bannerImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 38vw;
    width: 100%;
`;

const Banner = () => {
    return (
        <BannerContainer />
    );
};

export default Banner;