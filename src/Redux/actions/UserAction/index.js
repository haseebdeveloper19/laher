import axios from 'axios';
import { GET_ERRORS, SET_CURRENT_USER, FORGOT_PASS, RESET_PASS, UPDATE_PASS, VERIFY_EMAIL, REG_USER, COUNT_USERS, GET_USER, COUNT_WEB_VISITERS } from '../types';
import setAuthToken from '../../../setAuthToken';
import jwt_decode from 'jwt-decode';

export const registerUser = (user, history) => dispatch => {
    axios.post('http://localhost:8000/api/users/register', user)
        .then(res => {
            console.log("User are Registered", res.data)
            dispatch({
                type: REG_USER,
                payload: res.data
            })


        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}



export const GetUsers = () => async dispatch =>{
    
    try {
      const users = await axios
        .get('http://localhost:8000/api/users/GetUsers')
        .then(res => res.data.data)
  
      dispatch({
        type: GET_USER,
        payload: users,
      })
    } catch (err) {
         console.log("error are during fetcing data ")
  }  
}

export const GetVisister = () => async dispatch =>{
    
    try {
      const users = await axios
        .get('http://localhost:8000/api/users/getvisiter')
        .then(res => res.data.data)
  
      dispatch({
        type: COUNT_WEB_VISITERS,
        payload: users,
      })
    } catch (err) {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
  }  
}

export const Web_Visister_counter = (product) => async dispatch =>{
    console.log("products" , product)
   
    try {
        const resp = await axios.post('http://localhost:8000/api/users/countweb', product)
        .then(res => res.data)
        console.log("res" , resp)
        // dispatch({
        //              type: COUNT_WEB_VISITERS,
        //             //  payload : resp
        //          })
    } catch (err) {
        console.error(err);
    }
    
   
}

export const Verify = (token) => dispatch => {
    axios.get(`/api/users/verify/${token}`, token)
        .then(res => {
            console.log("Verify data sended", res.data.data)
            dispatch({
                type: VERIFY_EMAIL,
                payload: res.data.data
            })
        })
        .catch(err => {
            console.log("erorr are verfiy ", err.response.data)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}





export const forgot = (user) => dispatch => {
    console.log(user)
    axios.post('/api/users/forgot', user)
        .then(res => {
            console.log("forgot data sended", res.data)
            dispatch({
                type: FORGOT_PASS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}



export const ResetPass = (Token) => dispatch => {
    axios.get(`/api/users/reset/${Token}`)
        .then(res => {
            console.log("reset data sended", res.data)
            dispatch({
                type: RESET_PASS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log("error are during reset get token", err.response)
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            });
        });
}


export const UpdatePass = (User, history) => dispatch => {
    axios.post(`http://localhost:8000/api/users/Updatepassword/${User.token}`, User)
        .then(res => {
            console.log("reset data sended", res.data)
            dispatch({
                type: UPDATE_PASS,
                payload: res.data
            })

        })
        .catch(err => {
            console.log("error are during reset get token", err.response.data)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}


export const UserCount = ( ) => async dispatch =>{
    try{
    let count = await axios.get('http://localhost:8000/api/users/countUser')
    .then(res => res.data.data )
        dispatch({
            type : COUNT_USERS,
            payload: count
        })

}
catch(error){
    dispatch({
         type: GET_ERRORS,
         payload: error
    })
}
}

export const SoldItem = ( ) => async dispatch =>{
    try{
    let count = await axios.get('http://localhost:8000/api/users/countUser')
    .then(res => res.data.data )
        dispatch({
            type : COUNT_USERS,
            payload: count
        })

}
catch(error){
    dispatch({
         type: GET_ERRORS,
         payload: error
    })
}
}


export const updateDate = (product) => async dispatch =>{
    console.log("products" , product)
   
    try {
         await axios.post('http://localhost:8000/api/users/updateDate', product)
        .then(res => res.data)
    } catch (err) {
        console.error(err);
    }
    
   
}






export const loginUser = (user) => dispatch => {
    axios.post('/api/users/login', user)
        .then(res => {
            console.log("login  process succesfully ", res.data)
            const { token } = res.data;
            
            localStorage.setItem('UserjwtToken', token);
            setAuthToken(token);
            const decoded = jwt_decode(token);
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => {
            console.log("login  process fail ", err.response.data)
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            });
        });
}

export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,

    }
}

export const logoutUser = (history) => dispatch => {
    localStorage.removeItem('UserjwtToken');
    localStorage.removeItem('_id');
    console.log("Logout process are completed")
    setAuthToken(false);
    dispatch(setCurrentUser({}));
    window.location.href = '/login'
}