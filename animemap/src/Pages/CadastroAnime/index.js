import React from "react";
import Header from "../../components/header/header";
import Form from "../../components/ProjectForm/form";
import style from './style.css'


function NewProject(){
    return(
        <>
        <Header/>
        <div className="newproject_container">
            <h1>Cadastro de Anime</h1>
            <p>Ajude a nossa comunidade, cadastre novos animes junto com a gente!</p>
            <Form btnText="Criar Anime"/>
        </div>
        </>
        
    )
}

export default NewProject