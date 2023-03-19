import axios from "axios";
import { data } from "../Data.json";

const GET_CHANNEL = 'GET_CHANNEL';

// export const getChannel = () => {
//     try {
//         console.log('action')
//       return async dispatch => {
//         const res = await axios.get('data.js');
//         console.log('acon',res)
//         if (res) {

//           dispatch({
//             type: 'GET_CHANNEL',
//             payload: res.data,
//           });
//         } else {
//           console.log('Unable to fetch');
//         }
//       };
//     } catch (error) {
//         console.log('action')
//         if (error.response) {
//             // The server responded with a status code outside of the range of 2xx
//             console.log(error.response.data);
//             console.log(error.response.status);
//             console.log(error.response.headers);
//           } else if (error.request) {
//             // The request was made but no response was received
//             console.log(error.request);
//           }
//     }
// }

export const getChannel = () => {
  try {
    return async dispatch => {
      const json = await axios.get("https://jsonplaceholder.typicode.com/users");
      // const data = await json.json();
      console.log('hel',json.data)
      if (data) {
        dispatch({
          type: GET_CHANNEL,
          usersData: json,
          isError: false,
        });

      } else {
        console.log('unable to fetch')
      }
    }
  } catch (e) {
    console.log(e);
  }
};

