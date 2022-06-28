import axios from 'axios'

const userAction = {
    signUpUser: (userData) => {

        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/auth/signup', {userData})
            dispatch({
                type: 'MESSAGE',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }
    },
    logInUser: (logedUser) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/auth/login', {logedUser})
            if(res.data.success) {
                localStorage.setItem('token',res.data.response.token)
                dispatch({
                    type: 'USER',
                    payload: res.data.response.userData
                })
            } else {
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
            }
        } 
    }
}

export default userAction
