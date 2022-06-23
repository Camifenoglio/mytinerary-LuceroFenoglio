const initialState = {
    itineraries: [],
    getOneItinerary: {},
    getItinerariesFromCity: []
}

const itinerariesReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "GET_ITINERARIES":
            return {
                ...state,
                itineraries: action.payload
            }
        case "GET_ONE_ITINERARY":
            return {
                ...state,
                getOneItinerary: action.payload
            }
        case "FIND_ITINERARIES_FROM_CITY":
            return {
                ...state,
                getItinerariesFromCity: action.payload
            }
        default:
            return state
    }
}

export default itinerariesReducer
