import React, { useState, useRef } from 'react'
import { StyledForm, StyledInput, StyledButton } from './styled';
import { useDispatch } from 'react-redux';
import { addTask } from '../../tasksSlice';
import { nanoid } from '@reduxjs/toolkit';


const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("")

    const inputRef = useRef(null)

    const dispatch = useDispatch()

    const focusInput = () => {
        inputRef.current.focus()
    }

    const onFormSubmit = (event) => {
        event.preventDefault()
        if(newTaskContent === "") {
            return;
        }

        dispatch(addTask({
            content: newTaskContent,
            done: false,
            id: nanoid()
        }))
        
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