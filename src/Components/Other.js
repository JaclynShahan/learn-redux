import React, { Component } from 'react';
import {connect} from 'react-redux';
//import connect to connect this component to redux

class Other extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        console.log(this.props)
        return(
            <div>
               <h1>MY OTHER COMPONENT</h1>
               <span>This is your number: {this.props.userReducer.number}</span>
               <button onClick={this.props.numberAdder}>Add Number</button>
            </div>

        )
    }
}
//create mapStateToProps function
const mapStateToProps = state => state;
//you'll use this to dispatch payloads to redux
const mapDispatchToProps = dispatch => ({
//functions added here will be available on props
numberAdder() { //dispatches and object with type and payload
    //numberAdder seen in props
    dispatch({
        type: 'INC_NUMBER',//type is where we send it
        payload: 1 //payload is the data
    })
}

})

export default connect(mapStateToProps, mapDispatchToProps)(Other);
//be sure to add parenthesis around your component name as well
//connect takes 2 params: mapStateToProps, and object