import axios from 'axios';
import { REG_BANNER, DELETE_BANNER, GET_BANNER, GET_ERRORS } from './types';

export const registerBanner = (user) => dispatch => {
    axios.post('/api/banner/register', user)
    .then(res =>{

        

        dispatch({
          type : REG_BANNER,
            payload : res.data
        })

        
    })
    .catch(err=>{
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                });
            });
}




export const Get_Banner = ( ) => dispatch => {

    axios.get('/api/banner/getSlider')
    .then(res =>{

        dispatch({
            type : GET_BANNER,
            payload : res.data.data
        })
    })
    .catch(err=>{
        dispatch({
            type : GET_ERRORS,
            payload: err.response.data
        })
    })
}

export const Delete_Banner = ( id ) => dispatch => {

    axios.get(`/api/banner/delSlider/${id}`)
    .then(res =>{

        dispatch({
            type : DELETE_BANNER,
            id : id
        })
    })
    .catch(err=>{
        dispatch({
            type : GET_ERRORS,
            payload: err.response.data
        })
    })
}





