import React, { useState } from "react";
import Input from "../Form-Item/input";
import style from './style.css'
import { api } from "../../services/api";

function CadastroPersonagem(){
    const [nome, setNome] = useState("")
    const [genero, setGenero] = useState("Escolha uma opção")
  
    const apertarBotao = () => {
        const body = {
            nome,
            genero
        }
        if(nome.length && genero.length > 0){
            const result = api.post("service/anime/personagem", body)
            console.log("",result)
        }
       alert("Personagem criado com sucesso!")
    }
    return(
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
                <option>Homem</option>
                <option>Mulher</option>
                <option>Indefinido</option>
            </select>

            {
                nome.length && genero.length > 0 ?
                <button className="btn" type="button"  onClick={apertarBotao}>
                Criar Personagem
                </button> :
                <button className="btn_desativado" type="button"  disabled>
                Criar Personagem
                </button>
            }
            
        </form>
        </>
    )
}
export default CadastroPersonagem