import React from 'react';
import '../styles/App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link as LinkRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import citiesActions from '../redux/actions/citiesAction';
import Itinerary from './Itinerary';
import itinerariesActions from '../redux/actions/itinerariesAction';
import ItineraryNotFound from './ItineraryNotFound';
import { Text } from '@nextui-org/react';

function CardDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()
    const [reload, setReload] = useState(false)

    useEffect(() => {
        dispatch(citiesActions.getOneCity(id))
        dispatch(itinerariesActions.findItinerariesFromCity(id))
        // eslint-disable-next-line 
    }, [id, reload])

    function handleSetReload() {
        setReload(!reload)
    }

    const city = useSelector(store => store.citiesReducer.getOneCity)

    const itineraries = useSelector(store => store.itinerariesReducer.getItinerariesFromCity)


    return (
        <>
            <div>
                <div>
                    <div
                        style={{
                            background: `url(${city?.image})`
                        }}
                        className="cardDetail"
                    >
                        <div className='boxDetail' >
                            <h4 className="card-title-details">{city?.name}</h4>
                            <p className="card-country-details">{city?.description}</p>

                        </div>

                        <div className='cardItineraryBox'>
                            <Text className='itinerary-title' h1>Itineraries</Text>
                            {itineraries.length > 0 ?
                                itineraries.map((itinerary, index) =>
                                    <Itinerary key={index} data={itinerary} handleSetR={handleSetReload} />) : <ItineraryNotFound />}
                        </div>
                        <div className="buttonDetails">
                                <LinkRouter to="/cities">
                                    <button className="button">
                                        <span className="button-content">Back Cities </span>
                                    </button>
                                </LinkRouter>
                            </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default CardDetails