import { useEffect, useState } from 'react';
import axios from 'axios';
import CardFilter from '../components/CardFilter';
import NotFound from './NotFound';

function Cities() {

  const [cities, setCities] = useState()
  const [search, setSearch] = useState("")

  useEffect(() => {
    axios.get("http://localhost:4000/api/cities")
      .then(response => setCities(response.data.response.cities))
  }, [])

  let cityFilter = cities?.filter(city => city.name.toLowerCase().startsWith(search.trim().toLowerCase()))

  return (
    <>
      <div className="citiesPage">
        <div  className='inputBox'>
        <input
          type="text"
          style={{ width: "20vw", marginTop: "2vh", height: "5vh", borderRadius: "15px", textAlign: "center", backgroundColor: "#9D3EF8", color: "white", fontFamily: "vollkon", fontSize: "1.3rem" }}
          placeholder="Enter your city"
          className='inputSearch'
          onKeyUp={e => { setSearch(e.target.value) }}
        ></input>
        </div>
        {cityFilter?.length > 0 ? (<CardFilter propsCityFilter={cityFilter} />) : (<NotFound />)}
      </div>
    </>
  )
}

export default Cities