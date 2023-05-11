import styled from "styled-components";

export const StyledHead = styled.header`
    margin: 0;
    padding: 0.5%;
    background-color: teal;
    text-align: center;
`;

export const StyledNav = styled.nav`
    color: white;
`;

export const Navigation = styled.ul`
    list-style-type: none;
    padding: 0 40% 0 40%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    justify-content: center;
    align-items: center;
`;

export const Link = styled.li`
    transition: 0.5s;

    &:hover {
        font-weight: 500;
        transform: scale(1.1);
    }

    &:active {
        transform: scale(1.1);
        font-weight: 500;
    }
`;