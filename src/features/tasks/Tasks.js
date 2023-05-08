import React, { useState } from 'react';
import Header from '../../common/Header';
import Buttons from './Buttons';
import Section from '../../common/Section'
import Form from './Form';
import Container from '../../common/Container';
import { useTasks } from '../../useTasks';
import TasksList from './TasksList';

function Tasks() {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    addNewTask,
    setAllDone,
    toggleTaskDone,
    removeTask,
  } = useTasks();

  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={
          <TasksList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
}

export default Tasks;
