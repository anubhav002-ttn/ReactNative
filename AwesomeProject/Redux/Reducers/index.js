import counterReducer from "./IncDec";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counterReducer
})

export default rootReducer