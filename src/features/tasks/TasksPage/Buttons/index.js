import { useSelector, useDispatch } from 'react-redux';
import { ButtonsContainer } from './styled';
import { Button } from '../../buttonsStyling';
import { selectTasksState, setAllDone, toggleHideDone } from '../../tasksSlice';

const Buttons = () => {

    const {tasks, hideDone} = useSelector(selectTasksState);
    const dispatch = useDispatch();
    if (tasks.length === 0) {
        return null
    };

    return (
        <ButtonsContainer>
            <Button
            onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Pokaż" : "Ukryj"} zakończone
            </Button>
            <Button 
            disabled={tasks.every(({done}) => done)}
            onClick={() => dispatch(setAllDone())}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsContainer>
    )
};

export default Buttons;