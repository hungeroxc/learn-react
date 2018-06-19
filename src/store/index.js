import {createStore, applyMiddleware, combineReducers} from 'redux'
import {counter, user} from './reducer'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import {composeWithDevTools} from 'redux-devtools-extension'

const reducers = combineReducers({
    counter,
    user
})

const store = createStore(
    reducers, 
    {}, 
    composeWithDevTools(applyMiddleware(thunk, promise()))
)

export default store

