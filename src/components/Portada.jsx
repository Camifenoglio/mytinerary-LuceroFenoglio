import React from "react"
import '../styles/index.css'
import '../styles/App.css'
import {Link as LinkRouter} from "react-router-dom";

function Portada(){
    return (
        <div className="imgPortada">
            <h1 className="tituloPortada">Mi Tinerary</h1>
            <h2 className= "parrafoPortada">Find your perfect trip, designed by insiders who know and love their cities!
            </h2>
            <LinkRouter to="/cities" className="botonLink">
            <button className="botonCities">
                Cities
            </button>
            </LinkRouter>

        </div>

        
    )
}

export default Portada