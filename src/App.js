import React, {useState} from 'react';
import Header from './Header';
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Form from './Form';
import Container from './Container';

const tasks = [
  { id: 1, content: "Task 1", done: false },
  { id: 2, content: "Task 2", done: true },
];

function App() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    return 
    
  };

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
        body={<Tasks tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={
          <Buttons
            tasks={tasks} 
            hideDone={hideDone} 
            toggleHideDone={toggleHideDone}
          />
        }
      />
    </Container>
  );
}

export default App;
