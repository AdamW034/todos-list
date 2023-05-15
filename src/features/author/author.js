import { About, Photo, PhotoDiv, TextInfo } from "./styled";

const AboutAuthor = () => (
  <About>
    <PhotoDiv>
      <Photo src="/todos-list/Adam.png" />
    </PhotoDiv>
    <TextInfo>
      <p>Mam 23 lata. Pasjonują mnie muzyka, motoryzacja, oraz bron palna.<br/>
      Programowaniem zainteresowałem się około 6 miesięcy temu i tyle też się go uczę.<br/>
      Chętnie podejmuję się satwianych przede mnią wyzwań i szybko zdobywam potrzebną do zrealizowania ich wiedzę.</p>
    </TextInfo>
  </About>
);

export default AboutAuthor;