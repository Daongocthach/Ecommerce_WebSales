import authReducer from './auth'
import categoryReducer from './category'
import userReducer from './user'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    category: categoryReducer,
    user: userReducer
})

export default rootReducer