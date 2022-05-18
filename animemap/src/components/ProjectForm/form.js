import React, { useState } from "react";
import Input from "../Form-Item/input";
import style from './style.css'
import { api } from "../../services/api";

function Form(){

    const [nome, setNome] = useState("")
    const [sinopse, setNomeSinopse] = useState("")
    const [genero, setGenero] = useState("Escolha uma opção")
    const [url, setUrl] = useState("")
  
    const apertarBotao = () => {
        const body = {
            nome,
            genero,
            sinopse,
            url
        }
        if(nome.length && sinopse.length && genero.length && url.length > 0){
            const result = api.post("service/anime/create", body)
            console.log("",result)
        }
       alert("Anime criado com sucesso!")
    }

    return (
        <>
        <form className={style.form}> 
            <Input
            type="text"
            text="Nome do anime"
            name="name"
            placeholder="Insira o nome do anime"
            handleOnChange={e => setNome(e.target.value)}
            />

            <p>Selecione o gênero do anime:</p>
            <select className="form_control_select"
             text="Selecione a categoria" 
             value={"texto"} 
             onChange={e => setGenero(e.target.value)}>
                <option >{genero}</option>
                <option>Terror</option>
                <option>Romance</option>
                <option>Isekai</option>
                <option>Shounen</option>
                <option>Ação</option>
            </select>

            <Input
            type="text"
            text="Sinopse do anime"
            name="text"
            placeholder="Insira a sinopse (limite de 255 caracteres)"
            handleOnChange={e => setNomeSinopse(e.target.value)}
            />
            
            <Input
            type="text"
            text="URL do Anime"
            name="text"
            placeholder="Insira a URL da imagem"
            handleOnChange={e => setUrl(e.target.value)}
            />
            {
                nome.length && sinopse.length && genero.length && url.length > 0 ?
                <button className="btn" type="button"  onClick={apertarBotao}>
                Criar Anime
                </button> :
                <button className="btn_desativado" type="button"  disabled>
                Criar Anime
                </button>
            }
            
        </form>
        </>   
    )
}

export default Form