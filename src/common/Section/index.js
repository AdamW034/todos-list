import React from "react";
import { StyledSection, ButtonsDiv, StyledDiv, StyledH2 } from "./styled";

const Section = ({title, body, extraHeaderContent}) => (
    <StyledSection>
        <ButtonsDiv>
          <StyledH2>{title}</StyledH2>
          {extraHeaderContent}
        </ButtonsDiv>
        <StyledDiv>
          {body}
        </StyledDiv>
    </StyledSection>
);

export default Section;