import React from 'react';

function NotFound() {
    return (
        <div className='notfoundContainer'>
        <img src={process.env.PUBLIC_URL+"/assets/pagenotfound.png"} alt="pagina en contruccion" style={{height: "60vh"}} />
        </div>
    )
}

export default NotFound