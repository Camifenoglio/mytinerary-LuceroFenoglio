import axios from 'axios'

const userAction = {
    signUpUser: (userData) => {

        return async (dispatch, getState) => {
            const res = await axios.post(urlMyTin+'api/auth/signUp', {userData})
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
        }
    },
    logInUser: (userLogin) => {
        return async (dispatch, getState) => {
            const res = await axios.post(urlMyTin+'api/auth/logIn', {userLogin})
            if(res.data.success) {
                localStorage.setItem('token',res.data.response.token)
                dispatch({
                    type: 'user',
                    payload: res.data.response.userData
                })
            } else {
                dispatch({
                    type: 'message',
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
