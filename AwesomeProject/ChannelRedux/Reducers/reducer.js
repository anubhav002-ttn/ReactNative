import {GET_CHANNEL} from '../Action/action'
const initialState = {
  channel: [],
};
function channelReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHANNEL:
        console.log('ax',action.usersData)
      return {...state, channel: action.usersData};
    default:
      return state;
  }
}
export default channelReducer;