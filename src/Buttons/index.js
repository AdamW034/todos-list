import React from 'react';
import { Button } from './styled';

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => {

    if (tasks.length === 0) {
        return null
    };

    return (
        <div>
            <Button
            onClick={toggleHideDone}
            >
                {hideDone ? "Pokaż" : "Ukryj"} zakończone
            </Button>
            <Button 
            disabled={tasks.every(({done}) => done)}
            onClick={setAllDone}
            >
                Ukończ wszystkie
            </Button>
        </div>
    )
};

export default Buttons;