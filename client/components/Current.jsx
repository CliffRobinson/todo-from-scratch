import React from 'react'

import {connect} from 'react-redux'

function Current(props) {
    console.log(props)
    return <div>
        <h2>Current Tasks!</h2>
        {props.current.map( task => <div> 
            <h3>{task.description}</h3>
        </div>)}
    </div>
}

const mapCateToProps = ({current}) => ({
    current
})

export default connect(mapCateToProps)(Current)