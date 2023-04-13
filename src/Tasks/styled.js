import styled, { css } from "styled-components";

export const StyledUl = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const StyledLi = styled.li`
    border-bottom: 1px solid rgb(236, 234, 234);
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;

    ${({hidden}) => hidden && css`
        display: none;
    `}
`;

export const ToggleDoneButton = styled.button`
    background-color: green;
    color: white;
    border: none;
    height: 30px;
    width: 30px;
    padding: 0;
    transition: 0.5s;

    &:hover {
        background-color: rgb(1, 150, 1);
        transform: scale(1.2);
    }

    &:active {
        background-color: rgb(3, 175, 3);
    }
`;

export const RemoveButton = styled.button`
    background-color: red;
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.5s;

    &:hover {
    background-color: rgb(255, 37, 37);
    transform: scale(1.2);
    }

    &:active {
    background-color: rgb(255, 62, 62)
    }
`;

export const TaskContent = styled.span`
    
    ${({done}) => done && css`
        text-decoration: line-through;
    `}
`;