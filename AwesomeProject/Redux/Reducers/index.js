import counterReducer from "./IncDec";
import channelReducer from "../../ChannelRedux/Reducers/reducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    counterReducer, channelReducer
})

export default rootReducer