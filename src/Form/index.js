import React, { useState } from 'react'
import './style.css'


const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("")

    const onFormSubmit = (event) => {
        event.preventDefault()
        addNewTask(newTaskContent.trim())
        setNewTaskContent("")
    };

    return (
        <form 
        className="section__form"
        onSubmit={onFormSubmit}
        >
            <input 
            className="section__input" 
            autoFocus 
            placeholder="Co jest do zrobienia?"
            value={newTaskContent}
            onChange = {(event) => setNewTaskContent(event.target.value)}
            />
            <button 
            className="section__button"
            >
                Dodaj zadanie
            </button>
        </form>
    );

};


export default Form;