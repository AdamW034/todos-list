import styled from "styled-components";

export const Button = styled.button`
    color: teal;
    background-color: transparent;
    border: none;
    transition: 0.5s;

    &:hover {
        color: rgb(0, 146, 146);
        transform: scale(1.1);
    }

    &:active {
        color: rgb(0, 165, 165);
    }

    &:disabled {
        color: rgb(184, 184, 184);
        transform: none;
    }
`;
