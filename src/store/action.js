import {
    INCREMENT, 
    DECREMENT,
    LOAD_USER,
    LOAD_USER_FULLFILLED
} from './../constants'
import axios from 'axios'

export const increment = (num = 1) => {
    return {
        type: INCREMENT,
        num
    }
}

export const decrement = (num = 1) => {
    return {
        type: DECREMENT,
        num
    }
}

export const getUser = () => {
    return {
        type: LOAD_USER,
        payload: {
            promise: axios.get('https://randomuser.me/api')
        }
    }
}