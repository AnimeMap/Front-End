import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AnimeInformation from './components/anime-information';
import NewProject from './Pages/CadastroAnime';
import Erro from './Pages/erro';
import Home from './Pages/home';



function Rotas(){
    return (
        <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/page-anime/:id" element={<AnimeInformation/>}/>
                <Route path="*" element={<Erro/>}/>
                <Route path="cadastro-anime" element={<NewProject/>}/>
            </Routes>
        </Router>
        </>
    );
}

export default Rotas;