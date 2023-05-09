import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledUl, StyledLi, RemoveButton, ToggleDoneButton, TaskContent } from './styled';
import { selectTasks } from '../tasksSlice';
import { toggleTaskDone, removeTask } from '../tasksSlice';
const TasksList = () => {

    const {tasks, hideDone} = useSelector(selectTasks);
    const dispatch = useDispatch()

    if (tasks.length === 0) {
        return null
    };

    return (
        <StyledUl>
            {tasks.map(task => (
                <StyledLi
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <ToggleDoneButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </ToggleDoneButton>

                    <TaskContent
                        done={task.done}
                    >
                      {task.content}
                    </TaskContent>
                    <RemoveButton
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </RemoveButton>
                </StyledLi>
            ))}
        </StyledUl>
    )

};

export default TasksList;