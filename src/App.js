import FormContainer from './FormContainer';
import Header from './Header';
import Tasks from './Tasks';
import Buttons from './Buttons';

const tasks = [
  {id: 1, content: "Task 1", done: true},
  {id: 2, content: "Task2", done: true},
];

let hideDoneTasks = false;

function App() {
  return (
    <main className="container">
      <Header />
      <section className="section">
        <div className="section__container">
          <h2 className="section__header">Dodaj nowe zadanie</h2>
        </div>
        <FormContainer />
      </section>
      <section className="section">
        <div className="section__container section__container--toggleTasksDone">
          <h2 className="section__header">Lista zadań</h2>
          <Buttons tasks= {tasks} hideDoneTasks= {hideDoneTasks} />
        </div>
        <div className="section__container">
          <Tasks tasks= {tasks} hideDoneTasks= {hideDoneTasks} />
        </div>
      </section>
    </main>
  );
}

export default App;
