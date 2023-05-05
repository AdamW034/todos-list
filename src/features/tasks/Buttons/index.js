import React from 'react';
import { Button, ButtonsContainer } from './styled';

const Buttons = ({tasks, hideDone, toggleHideDone, setAllDone}) => {

    if (tasks.length === 0) {
        return null
    };

    return (
        <ButtonsContainer>
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
        </ButtonsContainer>
    )
};

export default Buttons;