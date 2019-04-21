import React, { Component } from 'react';
import {connect} from 'react-redux';
//import connect to connect this component to redux

class ThisComponent extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    arrayChanger = () => {
        console.log(this.props.otherReducer)
        console.log(this.props.userReducer)
        let tempArr = this.props.otherReducer.animals //cannot mutate state/props-create a duplicate
        tempArr.push(this.props.userReducer.textHolder) //pushing the text into tempArr
        this.props.addAnimal(tempArr)
    }

    render() {
        console.log(this.props)
        return(
            <div>
                <h1>THIS OTHER COMPONENT</h1>
                <span>The data from the other component is: {this.props.userReducer.number}</span>
                <input 
                onChange={(e) => this.props.addText(e)}
                />
                <button onClick={this.arrayChanger}>Add Animal</button>
            </div>
        )
    }
}

//create mapStateToProps function
const mapStateToProps = state => state;
//you'll use this to dispatch payloads to redux
const mapDispatchToProps = dispatch => ({
//functions added here will be available on props
    addText(e) {
        dispatch({
            type: "SET_TEXT",
            payload: e.target.value
        })
    },
    addAnimal(animals) {
        dispatch({
            type: "SET_ARR",
            payload: animals
        })
    }

})

export default connect(mapStateToProps, mapDispatchToProps)(ThisComponent);
//be sure to add parenthesis around your component name as well
//connect takes 2 params: mapStateToProps, and object

