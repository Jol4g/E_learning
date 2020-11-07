import Axios from "axios";
import * as api from "../api/";

// Action Creators
export const checkUser = (email, password) => async (dispatch) => {
try {
    await api.checkUser(email,password).then(data=>{
    dispatch({ type: "FETCH", payload: data.data });
   })
   .catch((err)=>{
     return console.log(err)}
   )
  } catch (error) {
    console.log(error.message);
  }
};


// export const getUserfromApi = (email, password)=>{
//     return new Promise((resolve, reject)=>{
//         api.checkUser(email,password).then(e=>{
//             console.log(e)
//             resolve(e.data)
//         })
//         reject((err)=>console.log(err))
//     })
// }