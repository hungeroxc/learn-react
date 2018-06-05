import React, {Component} from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import Dustbin from './Dustbin'
import Box from './Box'
import {DragDropContext} from 'react-dnd'

@DragDropContext(HTML5Backend)
class Container extends Component {
    render() {
        return (
            <div>
                <Dustbin />
                <Box />
            </div>
        )
    }
}

export default Container


