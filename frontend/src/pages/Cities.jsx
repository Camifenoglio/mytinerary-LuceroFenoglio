import React from 'react';
import '../styles/App.css';
import { useEffect, useState } from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import axios from 'axios';

function Cities() {

  const [cities, setCities] = useState()
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities")
      .then(response => setCities(response.data.response.cities))
  }, [])

  let cityFilter = cities?.filter(city => city.name.toLowerCase().startsWith(search.trim().toLowerCase()))

  return (
    <div className="citiesPage">
      <input
        type="text"
        style={{ width: "20vw", marginTop: "2vh", height: "5vh", borderRadius: "15px", textAlign: "center", backgroundColor: "#9D3EF8", color: "white", fontFamily: "vollkon", fontSize: "1.3rem" }}
        placeholder="Enter your city"
        className='inputSearch'
        onKeyUp={e => { setSearch(e.target.value) }}
      ></input>
      <div className='cardContainer'>
        {cityFilter?.map(city =>
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
              <LinkRouter className='buttonLink custom-btn btn' to={`/details/${city._id}`} class="fancy" href="#">
                <span class="top-key"></span>
                <span class="text">View More</span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </LinkRouter>
            </div>

            <div className="card-info">
              <h4 className="card-title">{city.name}</h4>
              <p className="card-description">{city.country}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cities