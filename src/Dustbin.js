import React, {Component} from 'react'
import {
    DropTarget,
    DropTargetConnector,
    DropTargetMonitor,
    ConnectDropTarget
} from 'react-dnd'


const boxTarget = {
    drop() {
        console.log('进入区域')
        return {name: 'Dustbin'}
    }
}

@DropTarget(
    'card',
    boxTarget,
    (connect, monitor) => ({
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop()
    })
)
class Dustbin extends Component {
    render() {
        const {canDrop, isOver, connectDropTarget} = this.props
        const isActive = canDrop && isOver
        return (
            connectDropTarget && 
            connectDropTarget(
                <div style={{width: 300, height: 300, backgroundColor: 'blue'}}>目标</div>
            )
        )
    }
}

export default Dustbin


