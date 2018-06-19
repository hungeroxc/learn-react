import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as action from './store/action'
import User from './components/user.jsx'

const mapStateToProps = state => {
    return {
        counter: state.counter
    }
}



@connect(mapStateToProps, action)
class App extends Component {

    increment = () => {
        this.props.increment(2)
    }

    decrement = () => {
        this.props.decrement(3)
    }
    
    render() {
        const {counter} = this.props
        return (
            <div className="container">
                <h1>{counter}</h1>
                <p>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </p>
                <User />
            </div>
        )
    }
}



export default App