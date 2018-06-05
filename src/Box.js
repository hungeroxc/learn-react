import React, {Component} from 'react'
import {
    ConnectDragSource,
    DragSource,
    DragSourceConnector,
    DragSourceMonitor
} from 'react-dnd'


const boxSource = {
	beginDrag(props) {
        console.log('开始拖动')
		return {
			name: props.name,
		}
	},

	endDrag(props, monitor) {
		const item = monitor.getItem()
		const dropResult = monitor.getDropResult()
        console.log('结束拖动')
		if (dropResult) {
			alert(`You dropped ${item.name} into ${dropResult.name}!`)
		}
	},
}


@DragSource(
    'card',
    boxSource,
    (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    })
)
class Box extends Component {
    render() {
        const {isDragging, connectDragSource} = this.props
        const {name} = this.props
        return (
            connectDragSource &&
            connectDragSource(
                <div style={{backgroundColor: 'red', height: 100, width: 100}}>被拖动</div>
            )
        )
    }
}

export default Box
