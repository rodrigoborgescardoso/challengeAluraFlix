import styled from "styled-components";

const MainButton = styled.button`
    background-color: ${({ variant }) => variant === "primary" ? "var(--blue-default)" : variant === "secondary" ? "transparent" : 'transparent'};
    border-color: ${({ variant }) => variant === "primary" ? "transparent" : variant === "secondary" ? "var(--white-texts)" : 'var(--red-alerts)'};
    border-radius: 4px;
    color: var(--white-texts);
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1rem;
    padding: 0.5rem 0.8rem;
    transition: 0.2s;
    white-space: nowrap;

    &:hover {
        opacity: 0.6;
    }

    @media(min-width: 500px) {
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 0.5rem 1rem;
    }
`;

export default MainButton;