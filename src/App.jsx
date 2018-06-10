import React, {Component} from 'react'

class App extends Component {

    increment = () => {
        this.props.onIncrement(1)
    }

    decrement = () => {
        this.props.onDecrement(1)
    }
    
    render() {
        const {value} = this.props
        return (
            <div className="container">
                <h1>{value}</h1>
                <p>
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </p>
            </div>
        )
    }
}

export default App