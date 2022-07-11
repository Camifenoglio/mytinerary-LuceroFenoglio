import axios from 'axios';

const commentsAction = {
    addComment: (comment) => {

        return async (dispatch, getState) => {
           
            try {
                const token = localStorage.getItem('token')
                console.log(token)
                const res = await axios.post("http://localhost:4000/api/allItineraries/comment", {comment}, {
                    headers: {
                        'Authorization': 'Bearer '+token
                    }
                })
                return res.data
            } catch (error) {
                console.log(error)
            }
        }
    },
    
    modifyComment: (comment) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            try{
                const res = await axios.put("http://localhost:4000/api/allItineraries/comment", { ...comment }, {
                    headers: {
                        'Authorization': 'Bearer '+token
                    }
                })


                dispatch({
                    type: 'message',
                    payload: {
                        view: true,
                        message: res.data.message,
                        success: res.data.success
                    }
                })
    
                return res

            }catch(err){
                console.log(err)
            }
           
        }
    } ,
    deleteComment: (id, commentId) => {

        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.delete(`http://localhost:4000/api/allItineraries/comment/${id}`, {
                headers: {
                    'Authorization': 'Bearer '+token
                },
                data:{commentId}

            })

            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
               
            })
            return res
        }
    },

}

export default commentsAction;