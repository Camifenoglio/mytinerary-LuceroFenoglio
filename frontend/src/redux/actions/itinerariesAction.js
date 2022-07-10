import axios from 'axios';

const itinerariesActions = {
    getItineraries: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/itineraries')

            dispatch({ type: 'GET_ITINERARIES', payload: res.data.response.itineraries })
        }
    },
    getOneItinerary: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itineraries/${id}`)

            dispatch({ type: 'GET_ONE_ITINERARY', payload: res.data.response })
        }
    },
    findItinerariesFromCity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/itinerariesbycities/${id}`)
            // console.log(res)
            dispatch({ type: 'FIND_ITINERARIES_FROM_CITY', payload: res.data.response })
        }
    },
    likeDislike: (itineraryId) => {
        const token = localStorage.getItem('token')
        return async () => {
            try {
                //dsp de la ruta va un objeto vacio(2do parametro), si no toma headers como el body
                let response = await axios.put(`http://localhost:4000/api/like/${itineraryId}`, {},
                {headers: {
                    Authorization: 'Bearer '+token
                    }
                })
                //despues del Bearer va siempre un espacio si no concatena Bearertoken y pasa al 
                return response
                
            }catch (error) {
                console.log(error)
            }
        }
    }
}

export default itinerariesActions