import React from 'react';
import { Card, Text } from '@nextui-org/react';

function ItineraryNotFound() {
    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <Card isHoverable variant="bordered" css={{ mw: "50%", backgroundColor: "rgba(0, 0, 0, 0.5)", border: "none",display: "flex", alignItems: "center", margin: "2rem" }}>
            <Text style={{ fontFamily: "Vollkorn", fontSize: "4vh", color: "whitesmoke", paddingTop: "2vh", textAlign: "center" }}>IT SEEMS THERE ARE NO ITINERARIES YET!</Text>
            <img src={process.env.PUBLIC_URL+"/assets/montaña.png"} style={{height: "30vh"}} alt="not found"  />
            </Card>
        </div>
    )
}

export default ItineraryNotFound