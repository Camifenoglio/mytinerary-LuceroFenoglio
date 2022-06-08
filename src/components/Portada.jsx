import React from "react"
import '../styles/App.css'
import {Link as LinkRouter} from "react-router-dom";

function Portada(){
    return (
        <div className="imgPortada">
            <h1 className="tituloPortada">MiTinerary</h1>
            <h2 className= "parrafoPortada">Find your perfect trip, designed by insiders who know and love their cities!
            </h2>
            <LinkRouter to="/cities" className="botonLink">
            <button className="botonCities">
                Let's go!
            </button>
            </LinkRouter>

        </div>

        
    )
}

export default Portada