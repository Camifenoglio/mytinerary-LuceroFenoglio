import React from "react"
import '../styles/App.css'
import { Link as LinkRouter } from "react-router-dom";

function Hero() {
    return (
        <div className="imgHero">
            <h1 className="titleHero">MiTinerary</h1>
            <h2 className="paragraphHero">Find your perfect trip, designed by insiders who know and love their cities!
            </h2>
            <LinkRouter to="/cities" className="botonLink">
                <button className="buttoncities">
                    Let's go!
                </button>
            </LinkRouter>
        </div>

    )
}

export default Hero