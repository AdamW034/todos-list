import Header from './Header';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Form from './Form';
import Container from './Container';

const tasks = [
  { id: 1, content: "Task 1", done: false },
  { id: 2, content: "Task2", done: true },
];

let hideDoneTasks = false;

function App() {
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
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </Container>
  );
}

export default App;
