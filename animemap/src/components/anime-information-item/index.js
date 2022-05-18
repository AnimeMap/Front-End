import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const AnimeInformationItem = (props) => {
    
    return(
        <>
             <div className="container_anime_item">
            <div key={props?.key} className="imagem">
                <Link to = {`/page-anime/${props?.dado?.id}`}>
                <img className="imagem_img" src={props?.dado?.url} alt="" />
                    <div className="imagem_overlay">
                        <div className="imagem_title">   <span>{`Anime`}</span></div>
                        <p className="imagem_descricao">
                        <span>{props? `${props?.dado?.nome}`: ``}</span>
                        </p>
                    </div>
                </Link>   
            </div>
            </div>
        </>
    )
}
export default AnimeInformationItem

