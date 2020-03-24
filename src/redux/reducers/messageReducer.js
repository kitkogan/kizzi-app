// const msgReducer = (state=[], action) => action.type === `SET_MSG` ? action.payload : state;
// export default msgReducer;

const msgReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MSG':
            return action.payload;
        default:
            return state;
    }
}

export default msgReducer;

