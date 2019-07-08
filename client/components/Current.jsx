import React from 'react'

import {connect} from 'react-redux'



class Current extends React.Component {
    componentDidMount(){
        //this.props.dispatch(getRats())
        console.log("Tiem for taks")
    }

    render() {
        console.log(this.props)
        const {current} = this.props
        return <div>
        <h2>Current Tasks!</h2>
        {current.map( task => <div> 
            <h3>{task.description}</h3>
        </div>)}
    </div>
    }
}

const mapCateToProps = ({current}) => ({
    current
})

export default connect(mapCateToProps)(Current)