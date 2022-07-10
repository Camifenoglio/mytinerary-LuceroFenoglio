import axios from 'axios';

const activitiesActions = {
    getActivities: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/activities')
            console.log(res)
            dispatch({ type: 'GET_ACTIVITIES', payload: res.data.response.activities })
        }
    },
    getOneActivity: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/activities/${id}`)
            console.log(res)
            dispatch({ type: 'GET_ONE_ACTIVITY', payload: res.data.response })
        }
    },
    findActivitiesFromItinerary: (id) => {
        // console.log(id)
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/activitiesbyitinerary/${id}`)
            // console.log(res)
            return res.data.response
        }
    }
}

export default activitiesActions