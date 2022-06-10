import React from 'react';
import '../styles/App.css';
import cities from '../citiesData/Cities.json';

function Cities() {
    return (
        <>
        <div className='cardContainer'>
        {cities.map(citie =>
        <div key={citie.id}
        style={{
          background: `url(${citie.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          objectFit: "cover"
        }}
        className="card"
      >
            <div className="card-info">
              <h4 className="card-title">{citie.name}</h4>
              <p className="card-description">{citie.name}</p>
            </div>
    </div>
    )}
    </div>
    </>)
    
}

export default Cities