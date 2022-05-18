import React, { useState } from "react";
import style from './select.css'

function Select({ text, name, options, handleOnChange, value}){
   const [texto, setTexto] = useState()
   console.log("texto", texto)
    return (
        <div className="form_control_select">
            <label htmlFor={name}>{text}:</label>
            <select onChange={e => setTexto(e.target.value)} name={name} id={name}>
                <option>selecione uma opção</option>
                <option>Terror</option>
                <option>Romance</option>
            </select>
        </div>    
    )
}

export default Select