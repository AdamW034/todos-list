import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyledUl, StyledLi, RemoveButton, ToggleDoneButton, TaskContent, StyledLink } from './styled';
import { toggleTaskDone, removeTask, selectTasksByQuery } from '../../tasksSlice';
import { useLocation } from "react-router-dom";

const TasksList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get("szukaj");


    const { tasks, hideDone } = useSelector(state => selectTasksByQuery(state, query));
    const dispatch = useDispatch();

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
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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