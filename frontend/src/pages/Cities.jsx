import { useState } from 'react';
import CardFilter from '../components/CardFilter';
import NotFound from './NotFound';
import {connect} from 'react-redux';

function Cities(props) {

  const [search, setSearch] = useState("")

  let cityFilter = props.cities?.filter(city => city.name.toLowerCase().startsWith(search.trim().toLowerCase()))

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
const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    auxiliar: state.citiesReducer.auxiliar,
  }
}

export default connect(mapStateToProps, null)(Cities)
