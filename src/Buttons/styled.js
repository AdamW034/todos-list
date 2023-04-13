import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
        
    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-gap: 5px;
    }    
`;

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

