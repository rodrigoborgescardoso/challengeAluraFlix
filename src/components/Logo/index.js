import React from 'react';
import logo from 'assets/logo.png';
import styled from 'styled-components';

const LogoImage = styled.img`
    width: ${({ size }) => size === "small" ? "10.25rem" : size === "big" ? "12.5rem" : 0};
`;

const Logo = ({size}) => {
    return (
        <LogoImage src={logo} size={size} alt='Logo da AluraFlix' />
    );
};

export default Logo;