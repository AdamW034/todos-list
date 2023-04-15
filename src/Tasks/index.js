import React from 'react';
import { StyledUl, StyledLi, RemoveButton, ToggleDoneButton, TaskContent } from './styled';

const Tasks = (props) => {
    if (props.tasks.length === 0) {
        return null
    };

    return (
        <StyledUl>
            {props.tasks.map(task => (
                <StyledLi
                    key={task.id}
                    hidden={task.done && props.hideDone}
                >
                    <ToggleDoneButton
                        onClick={() => props.toggleTaskDone(task.id)}
                    >
                        {task.done ? "✔" : ""}
                    </ToggleDoneButton>

                    <TaskContent
                        done={task.done}
                    >
                        {task.id} - {task.content}
                    </TaskContent>
                    <RemoveButton
                        onClick={() => props.removeTask(task.id)}
                    >
                        🗑
                    </RemoveButton>
                </StyledLi>
            ))}
        </StyledUl>
    )

};

export default Tasks;