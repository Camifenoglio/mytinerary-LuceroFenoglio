import React from 'react';

function Error() {
    return (
        <div className='CiudadesContainer'>
        <img src={process.env.PUBLIC_URL+"/assets/pagenotfound.png"} alt="pagina en contruccion" style={{height: "60vh"}} />
        </div>
    )
}

export default Error