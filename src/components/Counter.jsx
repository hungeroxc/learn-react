import React, {Component} from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {value, increment, decrement} = this.props
        return (
            <div>
                Clicked: {value} times
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
                <button onClick={() => {
                    if(value % 2 !== 0) {
                        increment()
                    }
                }}>if odd +</button>
                <button onClick={() => {
                    setTimeout(increment, 1000)
                }}>async +</button>
            </div>
        )
    }
}

export default Counter


