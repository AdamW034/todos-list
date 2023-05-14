import styled from "styled-components";

export const StyledHead = styled.header`
  margin: 0;
  padding: 0.5%;
  background-color: teal;
  text-align: center;
`;

export const StyledNav = styled.nav`
    color: white;
`;

export const NavigationUl = styled.ul`
  list-style-type: none;
  padding: 0 40% 0 40%;
  display: grid;
  margin: 10px;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const LinksLi = styled.li`
  transition: 0.5s;

  &:hover {
    font-weight: 600;
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.1);
    font-weight: 600;
  }
`;