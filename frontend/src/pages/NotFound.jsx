import React from 'react';

function NotFound() {
    return (
        <div className='notfoundContainer'>
        <img src={process.env.PUBLIC_URL+"/assets/notfound.png"} alt="not found" style={{height: "40vh"}} />
        <p style={{fontFamily: "Vollkorn", fontSize: "6vh", color: "white", paddingTop: "2vh"}}> No results found</p>
        </div>
    )
}

export default NotFound