//reducer
const initialState = { //initialize your state
    number: 0, //we'll start with a number that starts at 0
    textHolder: ''
}

export default function reducer(state = initialState, action) {
    //const {type, payload} = action destructuring them out if i wanted
switch (action.type) {
case "SET_USER":
return { ...state, user: action.payload }
//if you don't return make sure you break after each case
case "SET_TEXT":
return {...state, textHolder: action.payload}

case 'INC_NUMBER':
console.log('Here is the reducer state', state)
return {...state, number: state.number + action.payload}

default:
return state
}
}