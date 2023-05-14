import Container from "../../common/Container";
import Header from "../../common/Header";
import Section from "../../common/Section";
import AboutAuthor from "./author";

const Author = () => (
  <Container>
    <Header
      title="O autorze"
    />
    <Section
      title="Adam Wieczorek"
      body={ <AboutAuthor/> }
    />
  </Container>
);

export default Author;