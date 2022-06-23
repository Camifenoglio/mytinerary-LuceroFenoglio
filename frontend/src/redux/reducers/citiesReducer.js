const initialState = {
    cities: [],
    getOneCity: {},
    filterCity: []
}

const citiesReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "GET_CITIES":
            return {
                ...state,
                cities: action.payload,
                filterCity: action.payload
            }
        case "GET_ONE_CITY":
            return {
                ...state,
                getOneCity: action.payload
            }
        case 'FILTER_CITIES':
            let filter = state.cities.filter(city => city.name.toLowerCase().startsWith(action.payload.trim().toLowerCase()))
            return {
                ...state,
                filterCity: filter
            }
            default:
                return state
    }
}

export default citiesReducer
