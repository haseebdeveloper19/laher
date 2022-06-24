import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_ADMIN , REG_USER} from './types';
import setAuthToken from '../../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerAdmin = (user, history) => dispatch => {
    axios.post('http://localhost:8000/api/admins/register', user)
            .then(res=>{
                
                dispatch({
                    type: REG_USER,
                    payload: res.data
                })

                
            })
            .catch(err => {
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response
                });
            });
}


// export const Verify = (token) => dispatch => {
//     axios.get(`/api/admins/verify/${token}`, token)
//             .then(res =>{
//                 dispatch({
//                     type : VERIFY_EMAIL,
//                     payload: res.data.data
//                 })
//             })
//             .catch(err => {
                 
//                 dispatch({
//                     type: GET_ERRORS,
//                     payload: err.response.data
//                 });
//             });
// }





// export const forgot = (user) => dispatch => {
    
//     axios.post('/api/admins/forgot', user)
//             .then(res =>{
                
//                 dispatch({
//                     type : FORGOT_PASS,
//                     payload: res.data
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: GET_ERRORS,
//                     payload: err.response.data
//                 });
//             });
// }



// export const ResetPass = (Token) => dispatch => {
//     axios.get(`/api/admins/reset/${Token}`)
//             .then(res =>{
                
//                 dispatch({
//                     type : RESET_PASS,
//                     payload: res.data
//                 })
//             })
//             .catch(err => {
                
//                 dispatch({
//                     type: GET_ERRORS,
//                     payload: err.response
//                 });
//             });
// }


// export const UpdatePass = (User , history) => dispatch => {
//     axios.post(`/api/admins/Updatepassword/${User.token}` , User)
//             .then(res =>{
                
//                 dispatch({
//                     type : UPDATE_PASS,
//                     payload: res.data
//                 })

//                 history.push('/login')
//             })
//             .catch(err => {
                
//                 dispatch({
//                     type: GET_ERRORS,
//                     payload: err.response.data
//                 });
//             });
// }








export const loginAdmin = (user) => dispatch => {
    axios.post("http://localhost:8000/api/admins/login", user)
            .then(res => {
                const { token } = res.data;
                localStorage.setItem('jwtToken', token);
                setAuthToken(token);
                const decoded = jwt_decode(token);
                dispatch(setCurrentAdmin(decoded));
            })
            .catch(err => {
                
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response
                });
            });
}

export const setCurrentAdmin = decoded => {
    return {
        type: SET_CURRENT_ADMIN,
        payload: decoded
    }
}

export const logoutAdmin = (history) => dispatch => {
    localStorage.removeItem('jwtToken');
    
    setAuthToken(false);
    dispatch(setCurrentAdmin({}));
    window.location.href = '/login'
}