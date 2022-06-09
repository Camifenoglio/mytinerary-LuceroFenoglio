import React from "react"
import '../styles/App.css'
import { Link as LinkRouter } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


const pages = [{ name: 'Home', to: '/' }, { name: 'Cities', to: "/cities" }];

function Footer() {
    return (
        <>
            <div className="FooterContainer">
                <div>
                    <img src={process.env.PUBLIC_URL + "/assets/logo.png"} alt="logo" style={{ height: "4rem" }} />
                </div>
                <div className="RedesContainer">
                    <FacebookIcon sx={{ color: "white", fontSize: "2rem" }} />
                    <InstagramIcon sx={{ color: "white", fontSize: "2rem" }} />
                    <WhatsAppIcon sx={{ color: "white", fontSize: "2rem" }} />
                </div>
                <div className="botonRedes">
                    {pages.map((page, index) => (
                        <LinkRouter to={page.to} key={index} className="botonLink" >
                            <MenuItem >
                                <Typography sx={{ fontFamily: 'Vollkorn', color: "#B329F8", fontSize: "3vh", padding: "0.5rem" }} textAlign="center">{page.name}</Typography>
                            </MenuItem>
                        </LinkRouter>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Footer