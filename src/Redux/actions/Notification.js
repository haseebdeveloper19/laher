import axios from 'axios'
import { FETCH_NOTIFICATION_DATA, GET_ERRORS , HIDE_NOTIFICATION } from './types'

export const getNotificInfo = () => async dispatch => {


    try {
        const users = await axios
            .get(`http://localhost:8000/api/notification/getNotification`)
            .then(res => res.data.data)

        dispatch({
            type: FETCH_NOTIFICATION_DATA,
            payload: users,
        })
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }



}

export const Hide_Notification_Mes = () => async dispatch =>{
   
    try {
      let resp =  await axios.post('http://localhost:8000/api/notification/HideNotifi')
        .then(res => res.data)
        dispatch({
                     type: HIDE_NOTIFICATION,
                    //  payload: resp
                     
                 })
    } catch (err) {
        console.error(err);
    }
    
   
}


export const Update_date = (date) => async dispatch =>{
    try {
       await axios.post('http://localhost:8000/api/notification/UpdateDate', date)
        .then(res => res.data)
       
        // dispatch({
        //              type: HIDE_NOTIFICATION,
                     
        //          })
    } catch (err) {
        console.error(err);
    }
    
   
}

