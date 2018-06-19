import {
    INCREMENT, 
    DECREMENT,
    LOAD_USER_PENDING,
    LOAD_USER_FULFILLED
} from './../constants'

export const counter = (state = 0, action) => {
    switch(action.type) {
        case INCREMENT:
            return state + action.num
        case DECREMENT:
            return state - action.num
        default:
            return state
    }
}

const initialState = {
    isFetching: false,
    error: null,
    user: {}
}

export const user = (state = initialState, action = {}) => {
    switch(action.type) {
        case LOAD_USER_PENDING:
            return {
                isFetching: true
            }
        case LOAD_USER_FULFILLED:
            return {
                isFetching: false,
                error: null,
                user: action.payload.data.results[0]
            }
        default:
            return state
    }
}



