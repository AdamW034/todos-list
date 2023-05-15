import styled from "styled-components";

export const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        grid-gap: 10px;
    }
`;
