import { useState } from 'react';
import CardFilter from '../components/CardFilter';
import NotFound from './NotFound';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import citiesActions from '../redux/actions/citiesAction';


function Cities() {

  const dispatch = useDispatch()
  const [input, setInput] = useState("")

  useEffect(() => {
    dispatch(citiesActions.filterCities(input))
    // eslint-disable-next-line 
  }, [input])

  const cityFilter = useSelector(store => store.citiesReducer.filterCity)

  return (
    <>
      <div className="citiesPage">
        <div className='inputBox'>
          <input
            type="text"
            style={{ width: "20vw", marginTop: "2vh", height: "5vh", borderRadius: "15px", textAlign: "center", backgroundColor: "transparent", color: "grey", fontFamily: "vollkon", fontSize: "1.3rem" }}
            placeholder="Find your city"
            className='inputSearch'
            onKeyUp={e => setInput(e.target.value)}
          ></input>
        </div>
        {cityFilter?.length > 0 ? (<CardFilter propsCityFilter={cityFilter} />) : (<NotFound />)}
      </div>
    </>
  )
}

export default Cities