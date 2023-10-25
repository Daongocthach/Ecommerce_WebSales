const initialState = {
    _id: '',
    fullname: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    avatar: '',
    role: -1
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'LOGIN': {
            console.log({
                ...state,
                ...action.payload
            })
            return {
                ...state,
                ...action.payload
            }
        }

        case 'UPDATE_FULLNAME': {
            console.log({
                ...state,
                fullName: action?.payload?.fullName
            })
            return {
                ...state,
                fullName: action?.payload?.fullName
            }
        }

        case 'UPDATE_AVATAR': {
            console.log({
                ...state,
                avatar: action?.payload
            })
            return {
                ...state,
                avatar: action?.payload
            }
        }

        case 'LOGOUT': {
            return {
                _id: '',
                fullname: '',
                username: '',
                email: '',
                password: '',
                phone: '',
                address: '',
                avatar: '',
                role: -1
            }
        }

        default: {
            return state
        }
    }
}

export default authReducer
