import React from 'react'
import ReactDOM from 'react-dom'
import Counter from './components/Counter.jsx'
import reducer from './reducers/reducers'
import {createStore} from 'redux'

const store = createStore(reducer)

const render = () => ReactDOM.render(
    <Counter 
        value={store.getState()}
        increment={() => store.dispatch({type: 'INCREMENT'})}
        decrement={() => store.dispatch({type: 'DECREMENT'})}
    />,
    document.querySelector('#app')
)
render()

store.subscribe(render)
