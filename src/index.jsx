import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import store from './store'
import {increment, decrement} from './store/action'




const render = () => ReactDOM.render(
    <App 
        value={store.getState()}
        onIncrement={store.dispatch(increment)}
        onDecrement={store.dispatch(decrement)}
    />,
    document.querySelector('#app')
)
store.subscribe(() => {
    console.log('state change', store.getState())
})
store.subscribe(render)




