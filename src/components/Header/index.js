import React from "react";
import styled from "styled-components";
import Logo from "components/Logo";
import MainButton from "components/buttons/MainButton";
import { Link, useLocation, useNavigate } from "react-router-dom";

const HeaderContainer = styled.nav`
    align-items: center;
    border-bottom: 1px solid var(--blue-default);
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2.5rem;
`;

const LinkStyled = styled(Link)`
    line-height: 0;
`;

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <HeaderContainer>
            <LinkStyled to={'/'}>
                <Logo size={'small'} />
            </LinkStyled>

            { location.pathname === '/' ? <MainButton variant={'secondary'} onClick={ () => navigate( 'addvideo' ) } >Novo vídeo</MainButton> : '' }
        </HeaderContainer>
    );
};

export default Header;