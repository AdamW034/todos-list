import React from "react";
import { StyledSection, StyledDiv, StyledH2 } from "./styled";

const Section = ({title, body, extraHeaderContent}) => (
    <StyledSection>
        <StyledDiv toggleTaskDone>
          <StyledH2>{title}</StyledH2>
          {extraHeaderContent}
        </StyledDiv>
        <StyledDiv>
          {body}
        </StyledDiv>
    </StyledSection>
);

export default Section;