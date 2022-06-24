import React from 'react';
import { Card, Text } from '@nextui-org/react';

function ItineraryNotFound() {
    return (
        <div className='itiNotFoundBox' style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Text css={{ fontFamily: "Allura", fontSize: "15vh", color: "grey", textShadow: "8px -2px 3px white" }}>Itineraries</Text>
            <Card isHoverable variant="bordered" css={{ mw: "50%", backgroundColor: "WhiteSmoke", boxShadow: "0px 1px 20px", display: "flex", alignItems: "center", margin: "2rem" }}>
            <Text style={{ fontFamily: "Vollkorn", fontSize: "4vh", color: "grey", paddingTop: "2vh" }}>IT SEEMS THERE ARE NO ITINERARIES YET!</Text>
            <img src={process.env.PUBLIC_URL+"/assets/montaña.png"} style={{height: "30vh"}} alt="not found"  />
            </Card>
        </div>
    )
}

export default ItineraryNotFound