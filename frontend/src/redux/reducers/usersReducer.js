const initialState = {
    user: null,
    toast: {
        view: false,
        message: '',
        success:false
    }
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER':
            return {
                ...state,
                user: action.payload,   
            }
        case 'MESSAGE':
            return {
                ...state,
                toast: action.payload,   
            }
        default:
            return state
    }
}
export default usersReducer