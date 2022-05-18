import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import AnimeList from "../../components/list-animes";
import './style.css'



function Home(){

   
    return ( 
        <>
            <Header/>
            <AnimeList/>
            <Footer/>
        </>
    )
}
export default Home;