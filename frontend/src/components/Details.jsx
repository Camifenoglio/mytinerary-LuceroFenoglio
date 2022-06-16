import React from 'react';
import '../styles/App.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link as LinkRouter } from 'react-router-dom';

function CardDetails() {
    const { id } = useParams()
    const [city, setCity] = useState()

    useEffect(() => {
        axios.get(`http://localhost:4000/api/cities/${id}`)
            .then(response => setCity(response.data.response.city))
    }, [])

    return (

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
    )

}

export default CardDetails