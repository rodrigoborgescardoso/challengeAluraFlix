import React from "react";
import styled from "styled-components";
import Logo from "components/Logo";

const FooterContainer = styled.footer`
    border-top: 1px solid var(--blue-default);
    padding: 0.5rem 1rem;
    text-align: center;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Logo size={'big'} />
        </FooterContainer>
    );
};

export default Footer;