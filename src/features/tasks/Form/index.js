import React, { useState, useRef } from 'react'
import { StyledForm, StyledInput, StyledButton } from './styled';



const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("")

    const inputRef = useRef(null)

    const focusInput = () => {
        inputRef.current.focus()
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        if(newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent.trim())
        setNewTaskContent("")
        focusInput()
    };

    return (
        <StyledForm
        onSubmit={onFormSubmit}
        >
            <StyledInput
            ref={inputRef} 
            placeholder="Co jest do zrobienia?"
            value={newTaskContent}
            onChange = {(event) => setNewTaskContent(event.target.value)}
            />
            <StyledButton>
                Dodaj zadanie
            </StyledButton>
        </StyledForm>
    );

};


export default Form;