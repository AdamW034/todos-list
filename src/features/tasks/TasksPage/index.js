import Header from '../../../common/Header';
import Buttons from './Buttons';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Section from '../../../common/Section'
import Form from './Form';
import HeaderButton from '../headerButton'
import Container from '../../../common/Container';
import TasksList from './TasksList';
import SearchInput from './Input';

function TasksPage() {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  searchParams.get("szukaj")

  return (
    <>
      <Container>
        {location.search}
        <Header
          title="Lista zadań"
        />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
          extraHeaderContent={<HeaderButton />}
        />
        <Section
          title="Wyszukaj zadanie"
          body={<SearchInput />}
        />
        <Section
          title="Lista zadań"
          body={<TasksList />}
          extraHeaderContent={<Buttons />}
        />
      </Container>
    </>

  );
}

export default TasksPage;
