import axios from 'axios';

const itinerariesActions = {
    getItineraries: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/itineraries')
            console.log(res)
            dispatch ({type: 'GET_ITINERARIES', payload: res.data.response.itineraries})
        }
    },
    getOneItinerary: (id) => {
        return async(dispatch,getState) => {
            const res = await axios.get(`http://localhost:4000/api/itineraries/${id}`)
            console.log(res)
            dispatch ({type: 'GET_ONE_ITINERARY', payload: res.data.response})
        }
    },
    findItinerariesFromCity: (id) => {
        return async(dispatch,getState) => {
            const res = await axios.get(`http://localhost:4000/api/itinerariesbycities/${id}`)
            console.log(res)
            dispatch ({type: 'FIND_ITINERARIES_FROM_CITY', payload: res.data.response})
        }
}
}

export default itinerariesActions