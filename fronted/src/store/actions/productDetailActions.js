import axios from 'axios'
import * as actionTypes from './action-types'

export const getProductDetail =(id)=> {
    return async(dispatch) => {
        try {
            dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST})
            const { data } = await axios.get(`/api/products/${id}`)
            dispatch({type:actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data})
        } catch (error) {
            dispatch({
                type:actionTypes.GET_PRODUCT_DETAILS_FAIL,
                payload: error.response && error.response.data.message ? 
                error.response.data.message: error.message
            })
        }
    }
}

