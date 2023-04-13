import React, { useState } from 'react'
import { StyledForm, StyledInput, StyledButton } from './styled';



const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault()
        if(newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent.trim())
        setNewTaskContent("")
    };

    return (
        <StyledForm
        onSubmit={onFormSubmit}
        >
            <StyledInput 
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