import React from 'react';

function Ciudades() {
    return (
        <div className='CiudadesContainer'>
        <img src={process.env.PUBLIC_URL+"/assets/underconstruccion.png"} alt="pagina en contruccion" style={{height: "60vh"}} />
        </div>
    )
}

export default Ciudades