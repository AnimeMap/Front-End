import React, { useState } from "react";
import song from "../../assets/audiololli.mp3"
import './style.css'

function NotFound(props) {
   
    let audio = new Audio(song)
    let audioController = false;
    let contador = 0;

    const start = () => {
        audioController = !audioController
        if(audioController){
            audio.play()
            if(contador == 0){
                alert("Encontrou um Easter Egg!")
            }else{
                alert("Despausou a música uhuul!")
            }
            contador ++;          
        }else{
            audio.pause()
            alert("Pausou a música :c")
        }
       
      }
    const url = 'https://thumbs.gfycat.com/AmazingDeadAmericanmarten-size_restricted.gif'
    return (
        <>
        <div className="divPai">
            <img onClick={start} id="imagemNotFound" src={url} alt="" />
            <p className="mensagemErro"><h1>404</h1>
                  Ocorreu um erro durante a pesquisa, desculpe.
                  Pesquise novamente ou volte para a <span className="telaInicial">página inicial!</span>
            </p>
        </div>
        </>
        
    )
}
export default NotFound;