//reducer
const initialState = { //initialize your state
   animals: []
}

export default function reducer(state = initialState, action) {
    //const {type, payload} = action destructuring them out if i wanted
switch (action.type) {
case "SET_ARR":
return {...state, animals: action.payload}

default:
return state
}
}