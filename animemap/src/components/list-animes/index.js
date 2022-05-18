import React, { useCallback, useEffect, useState } from "react"
import AnimeInformationItem from "../anime-information-item";
import { api } from "../../services/api";
import song from "../../assets/audiorelaxar.mp3"
import './style.css'

function AnimeList(){

    const url = 'https://i.imgur.com/a47bfp6.png';
    let audio = new Audio(song)
    let audioController = false;
    let contador = 0;

    const start = () => {
        audioController = !audioController
        if(audioController){
            audio.play()
            if(contador == 0){
                alert("Aproveite o site, ele é para você!")
            }else{
                alert("Despausou a música :)")
            }
            contador ++;          
        }else{
            audio.pause()
            alert("Pausou a música :c")
        }
       
      }

    const [dados, setDados] = useState();
   
    useEffect(() => {
        api.get("/service/anime/animes")
        .then((response) => setDados(response.data))
        .catch((err) => {
            console.log("Aconteceu um erro " + err)
        })
    }, [])

    return(
      <>
       <div className="banner">
                <div>
                    <img onClick={start} id="imagemNotFound" src={url} alt="" />
                </div>
        </div>
        { dados? 
        <div className="container" key={dados.map(d => d.id)}>
            {dados && dados.map(dado =>  <AnimeInformationItem dado={dado}/> )}
        </div> : <></>
        }
        
       
      </>
    )
}
export default AnimeList;