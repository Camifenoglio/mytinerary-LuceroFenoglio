const initialState = {
    activities: [],
    getOneActivity: {},
    getActivitiesFromItinerary: []
}

const activitiesReducer = (state = initialState, action) => {

    switch (action.type) {
        case "GET_ACTIVITIES":
            return {
                ...state,
                itineraries: action.payload
            }
        case "GET_ONE_ACTIVITY":
            return {
                ...state,
                getOneActivity: action.payload
            }
        case "FIND_ACTIVITIES_FROM_CITY":
            return {
                ...state,
                getActivitiesFromItinerary: action.payload
            }
        default:
            return state
    }
}

export default activitiesReducer
