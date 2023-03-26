import React from 'react';
import './style.css'

const Tasks = (props) => (
    <ul className="section__list js-list">
        {props.tasks.map(task => (
            <li
            className={`section__listItem ${task.done && props.hideDone ? "section__listItem--hidden" : ""}`}>
                <button
                className="section__buttonDone js-done"
                onClick={ () => props.toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </button>
                
                <span
                className={`${task.done ? "section__listItem--done" : ""}`}>
                    {task.id} - {task.content}
                </span>
                <button
                className="section__buttonRemove js-remove"
                onClick={ () => props.removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;