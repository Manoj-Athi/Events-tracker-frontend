import { combineReducers } from "redux"
import authReducer from "./auth"
import eventsReducer from './events'

export default combineReducers({
    authReducer,
    eventsReducer
})