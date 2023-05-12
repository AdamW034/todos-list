import { StyledHead, StyledNav, NavigationUl, LinksLi } from "./styled";
import { Link } from "react-router-dom";

const PageHeader = ({children}) => (
  <StyledHead>
    {children}
  </StyledHead>
);

export default PageHeader;