import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
`;

export const StyledDiv = styled.div`
    background-color: rgb(255, 255, 255);
    padding: 20px;
    border: 1px solid rgb(236, 234, 234);
`;

export const ButtonsDiv = styled(StyledDiv)`
    display: grid;
    grid-template-columns: 1fr auto;

    @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
    };
`

export const StyledH2 = styled.h2`
    margin: 0;
`;