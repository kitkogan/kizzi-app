//used to store individual user for viewProfile page
const oneUserReducer = (state={}, action)=>{
    if (action.type === 'SET_ONE_USER'){
        return action.payload;
    }
    return state;
  }

  export default oneUserReducer;