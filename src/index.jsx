import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter.jsx'
import {createStore} from 'redux'
import reducer from './reducer/reducer'

const store = createStore(reducer)

const render = () => ReactDOM.render(
    <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    document.querySelector('#app')
)
render()
store.subscribe(render)

