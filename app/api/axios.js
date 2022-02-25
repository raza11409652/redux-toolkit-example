// import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';


// function  deleteSession(){
//     console.log("Session is expired");
//     // const event = new Event("forceLogout");
//     // window.dispatchEvent(event);
//     alertError({msg:"Your session is expired"})
//     DeviceEventEmitter.emit("logout_action")
// }
const axios = Axios.create({
  baseURL: 'https://techvanto.herokuapp.com/',
});
axios.interceptors.request.use(
  async config => {
    // const token = await AsyncStorage.getItem('loginToken');
    // if (token) {
    //   config.headers['authToken'] = token;
    // }
    return config;
  },
  error => Promise.reject(error),
);

// axios.interceptors.response.use(
//     (res) => {
//         return res;
//     },
//     async (err) => {
//         const originalConfig = err.config;
//         if (originalConfig.url !== "user/login" && err.response) {
//             if (err.response.status === 401 && !originalConfig._retry) {
//                 // originalConfig._retry = true;
//                 deleteSession()
//                 // try {
//                 //
//                 //     // deleteSession();
//                 // } catch (_error) {
//                 //     // deleteSession();
//                 //     return Promise.reject(_error);
//                 // }
//             }
//         }
//         return Promise.reject(err);
//     }
// );

export default axios;
