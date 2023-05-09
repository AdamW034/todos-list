import Header from '../../common/Header';
import Buttons from './Buttons';
import Section from '../../common/Section'
import Form from './Form';
import Container from '../../common/Container';
import TasksList from './TasksList';

function Tasks() {

  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList/>}
        extraHeaderContent={<Buttons/>}
      />
    </Container>
  );
}

export default Tasks;
