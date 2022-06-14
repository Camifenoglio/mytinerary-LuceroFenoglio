import React from 'react';
import '../styles/App.css';
import cities from '../citiesData/Cities.json';
import { useEffect } from 'react';

function Cities() {

  //const dataArray = [];

  // const [cities,setCities] = useState([]);
  // const [search, setSearch] = useState("");

  const handleChange = (e) => {
  //  setSearch(e.target.value);
  //  console.log(e.arget.value);
  };

  useEffect(() => {
    // const dataArray = [];

  })

  return (

    <div className="citiesPage">
      <input
        type="text"
        style={{width: "20vw", marginTop:"2vh", height:"5vh", borderRadius: "15px", textAlign: "center", backgroundColor: "#9D3EF8", color: "white", fontFamily: "vollkon", fontSize: "1.3rem"}}
        placeholder="Enter your city"
        className='inputSearch'
        onChange={handleChange}
      ></input>
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
    </div>)

}

export default Cities