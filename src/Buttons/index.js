import React from 'react';
import './style.css';

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => {

    if (tasks.length === 0) {
        return null
    };

    return (
        <div className="buttons">
            <button 
            className="section__buttons"
            onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż" : "Ukryj"} zakończone
            </button>
            <button 
            className="section__buttons" 
            disabled={tasks.every(({done}) => done)}
            onClick={setAllDone}
            >
                Ukończ wszystkie
            </button>
        </div>
    )
};

export default Buttons;