import React from 'react';
import { useNavigate } from "react-router-dom";
import './styles.css'


function Header() {
    const navigate = useNavigate()
    return (

        <div className="header">
            <div className="container_header">
                <h1 className="titulo">Anime<span>Map</span></h1>            
                <ul className="navbar">
                    <li onClick={() => navigate("/")}>home</li>
                    <li onClick={() => navigate("/cadastro-anime")}>animes</li>
                    <li>mangas</li>
                </ul>
            </div>
        </div>

    )
}
export default Header;