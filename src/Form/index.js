import React from 'react'
import './style.css'


const Form = () => (
    <form className="section__form">
        <input className="section__input" autoFocus placeholder="Co jest do zrobienia?" />
        <button className="section__button">Dodaj zadanie</button>
    </form>
);

export default Form;