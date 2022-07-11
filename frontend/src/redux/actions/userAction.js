import axios from 'axios'

const userAction = {
    signUpUser: (userData) => {

        return async (dispatch, getState) => {
            try {
                const res = await axios.post('http://localhost:4000/api/auth/signup', { userData })
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                return res
            } catch (error) {
                console.log(error)
            }
        }
    },
    logInUser: (userData) => {
        return async (dispatch, getState) => {
            const res = await axios.post('http://localhost:4000/api/auth/login', { userData })

            if (res.data.success) {
                localStorage.setItem("token", res.data.response.token) //tomo el token que le envie desde el back y lo envio al local storage
                dispatch({ type: "USER", payload: res.data.response.userData });
            }
                dispatch({
                    type: 'MESSAGE',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
                return res
            }
        },
        logOutUser: () => {
            return async (dispatch, getState) => {
                localStorage.removeItem('token')
                dispatch({
                    type: 'USER',
                    payload: null
                })
            }
        },
        verifyToken: (token) => {

            return async (dispatch, getState) => {
    
                await axios.get("http://localhost:4000/api/auth/token", {
                    headers: {
                        "Authorization": "Bearer " + token
                    }
                })
                    .then(res => {
                        if (res.data.success) {
  
                            dispatch({ type: "USER", payload: res.data.response });
                            dispatch({
                                type: "MESSAGE",
                                payload: {
                                    view: true,
                                    message: res.data.message,
                                    success: res.data.success
                                }
                            });
                        }else{ localStorage.removeItem("token")}
                    }
                    )
                    .catch(error => {
                        if(error.response.status === 401)
                        dispatch({type: "MESSAGE",
                    payload:{
                        view: true,
                        message: "Please Log In again",
                        success: false}})
                        localStorage.removeItem("token")
                    }) 
                }}
    
    }


export default userAction
