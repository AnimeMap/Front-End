import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import NotFound from "../../components/notfound";
import './style.css'

function Erro(props) {
   
    
    return (
        <div className="pai">
            <Header/>
            <NotFound></NotFound>
        </div>
        
    )
}
export default Erro;