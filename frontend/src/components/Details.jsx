import React from 'react';
import '../styles/App.css';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link as LinkRouter } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import citiesActions from '../redux/actions/citiesAction';
import Itinerary from './Itinerary';

function CardDetails() {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(citiesActions.getOneCity(id))
    },[id])

    const city = useSelector(store => store.citiesReducer.getOneCity)

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
                        <p className="card-country-details">{city?.country}</p>
                        <div className="buttonDetails">
                            <LinkRouter to="/cities" className="botonLink fancy">
                                <span className="top-key"></span>
                                <span className="text">Back Cities</span>
                                <span className="bottom-key-1"></span>
                                <span className="bottom-key-2"></span>
                            </LinkRouter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              <Itinerary/>
              </>
    )

}

export default CardDetails