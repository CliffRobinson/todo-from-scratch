import React from 'react'

//import {connect} from 'react-redux'

class Task extends React.Component {


    render() {
        //console.log(this.props)
        const {task} = this.props
        //console.log("Task is task:", task)
        return <tr>
                <td>{task.description}</td>
                <td>
                    <input type="text" value={task.notes}></input>
                </td>
                <td>
                    <input type="checkbox" value={`task-${task.id}`} checked={task.completed}></input>
                </td>
                <td>
                    <button>Edit me!</button>
                </td>
            </tr>
            
    }
}

export default Task