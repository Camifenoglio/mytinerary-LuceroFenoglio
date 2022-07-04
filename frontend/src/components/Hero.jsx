import React from "react"
import '../styles/App.css'
import { Link as LinkRouter } from "react-router-dom";

function Hero() {
    return (
        <div className="imgHero">
            <h1 className="titleHero">MiTinerary</h1>
            <h2 className="paragraphHero">Find your perfect trip, designed by insiders who know and love their cities!
            </h2>
            <LinkRouter to="/cities" className="buttonDetails">
                <button className="botonLink fancy">
                    <span className="top-key"></span>
                    <span className="text">Let's go!</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </button>
            </LinkRouter>
        </div>

    )
}

export default Hero