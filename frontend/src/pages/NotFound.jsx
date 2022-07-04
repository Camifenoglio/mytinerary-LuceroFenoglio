import React from 'react';

function NotFound() {
    return (
        <div className='notfoundContainer'>
            <img src={process.env.PUBLIC_URL + "/assets/notfound.png"} alt="not found" style={{ height: "30vh" }} />
            <p style={{ fontFamily: "Vollkorn", fontSize: "6vh", color: "grey", paddingTop: "2vh" }}> No results found</p>
        </div>
    )
}

export default NotFound