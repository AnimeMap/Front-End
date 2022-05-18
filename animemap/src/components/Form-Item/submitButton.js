import React from "react";
import style from './submitButton.css'

function SubmitButton({ text }){
    return (
        <div>
            <button type="button" className="btn">{text}</button>
        </div>    
    )
}

export default SubmitButton