import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import '../styles/App.css';


function CardFilter({propsCityFilter}) {
  return (
    < div className = 'cardContainer cardFilterBox ' >
      {propsCityFilter.map(city =>
        <div key={city._id}
          style={{
            background: `url(${city.image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            objectFit: "cover"
          }}
          className="card"
        >
          <div className='bottomDetails'>
            <LinkRouter className='buttonLink custom-btn btn' to={`/details/${city._id}`} className="fancy" href="#">
              <span className="top-key"></span>
              <span className="text">View More</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </LinkRouter>
          </div>

          <div className="card-info">
            <h4 className="card-title">{city.name}</h4>
            <p className="card-description">{city.country}</p>
          </div>
        </div>
      )}
  
      </div >
  )
}

export default CardFilter