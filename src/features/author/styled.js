import styled from "styled-components";
import { SearchDiv } from "../tasks/Input/styled";

export const About = styled(SearchDiv)`
    grid-template-rows: 1fr auto;
`

export const PhotoDiv = styled.div`
    text-align: center;
    padding: 5% 5% 0;
`;

export const Photo = styled.img`
    border-radius: 50%;
    width: 20%;
`;

export const TextInfo = styled.div`
    grid-template-rows: 1fr;
    padding: 5%;
    font-size: large;
`;