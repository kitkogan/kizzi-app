//sets state for the user list from userSaga
const userlistReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_USERLIST':
            return action.payload;
        default:
            return state;
    }
}

export default userlistReducer;