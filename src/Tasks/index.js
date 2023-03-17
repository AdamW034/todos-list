import React from 'react';
import './style.css'

const Tasks = (props) => (
    <ul className="section__list js-list">
        {props.tasks.map(task => (
            <li className={`section__listItem ${task.done && props.hideDoneTasks ? "section__listItem--hidden" : ""}`}>
               <button className="section__buttonDone js-done">{task.done ? "✔" : ""}</button>
               <span className={`${task.done ? "section__listItem--done" : ""}`}>
               {task.content}
               </span> 
               <button className="section__buttonRemove js-remove">🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;