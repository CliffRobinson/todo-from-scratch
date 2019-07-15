import React from 'react'

import {connect} from 'react-redux'

import {getCurrent} from '../api/current'

import Task from './Task'

class Current extends React.Component {
    componentDidMount(){
        this.props.dispatch(getCurrent())
        console.log("Tiem for taks")
    }

    render() {
        //console.log(this.props)
        const {current} = this.props
        return <div>
        <h2>Current Tasks!</h2>
        <table>
        <thead>
        <tr><th>Task</th><th>Notes</th><th>Completed</th></tr>
        </thead>
        <tbody>
        {current.map( (task, i) => task.has_parent ? null :
            <Task  key={i} task={task} />
            // <tr> 
            // <td>{task.description}</td>
            // <td>
            //     <input type="text" value={task.notes}></input>
            // </td>
            // <td>
            //     <input type="checkbox" value={`task-${task.id}`} checked={task.completed}></input>
            // </td>
            // <td><button>Edit me!</button></td>
            // </tr>
)}
        </tbody>
        </table>
    </div>
    }
}

const mapCateToProps = ({current}) => ({
    current
})

export default connect(mapCateToProps)(Current)