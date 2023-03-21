import Header from './Header';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Form from './Form';

const tasks = [
  { id: 1, content: "Task 1", done: true },
  { id: 2, content: "Task2", done: true },
];

let hideDoneTasks = false;

function App() {
  return (
    <main className="container">
      <Header />
      <Section 
        title="Dodaj nowe zadanie" 
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </main>
  );
}

export default App;
