import { StyledHead, StyledNav, Navigation, Link } from "./styled";

const PageHeader = () => (
  <StyledHead>
    <StyledNav>
      <Navigation>
        <Link>Zadania</Link>
        <Link>O autorze</Link>
      </Navigation>
    </StyledNav>
  </StyledHead>
);

export default PageHeader;