import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api"
import Header from "../header/header";
import CadastroPersonagem from "../ProjectFormPersonagem/personagem";
import './style.css'




function AnimeInformation(props){

    const [dados, setDados] = useState();
    const {id} = useParams()
   
    async function getData(){    
        const response = await api.get(`/service/anime/${id}`)
        setDados(response.data)
    }
    async function putData(){
        api.put(`/service/anime/visualizacao`, {
            id: dados?.id,
            visualizacao: dados?.visualizacao + 1
        })
    }
    useEffect(() => {
        if(!dados){
            getData()
        }else{
            putData()
        }
    }, [dados])

    function cadastroPersonagem(){
        {dados && dados.map(dado =>  <CadastroPersonagem dado={dado}/> )}
    }

    return(
        <>
        
            <Header/>
            <div className="container_information">
                <img className="imagem_information" src={dados?.url} alt="" />
            </div>
            <div className="informations">
                <p>Nome: <span>{dados && dados?.nome}</span></p>
                <p>Criadores:  <span>{dados && dados?.criadores.map(criador => criador.nome + ", ")}</span></p>
                <p>Personagens: <span>{dados && dados?.personagens.map(personagem => personagem.nome + ", " )}</span></p>
                <p>Gênero: <span>{dados && dados?.genero}</span></p>
                <p>Sinopse: <span>{dados && dados?.sinopse}</span></p>
            </div>
            <div className="itens_button"> 
            <div className="container_paragrafo">
                <p className="paragrafo">Visualizações: 
                <span> {dados && dados?.visualizacao +1 }</span>
                </p>
            </div>
            <button
            className="btn_item" 
            type="button"  
            onClick={cadastroPersonagem}>Criar Personagem</button>
            </div>
           
        </>
       
    )
}
export default AnimeInformation;