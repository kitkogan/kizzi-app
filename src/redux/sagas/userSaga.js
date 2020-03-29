import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

//watches for actions and calls the related function
function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeEvery('GET_USERLIST', getUsers);
  yield takeEvery('GET_ONE_USER', getProfile);
  yield takeEvery('UPDATE_PROFILE', updateProfile); 
  yield takeEvery('DELETE_USER', removeUser);
}
// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* getProfile(action) {
  console.log("this should equal an id", action.payload);
  console.log("You're doing awesome!!!!");
    //runs GET call to server then updates redux state with specific movie requested
    const response = yield axios.get(`api/user/viewProfile/${action.payload}`);
    try{
      console.log('user profile', response);
      yield put({type: 'SET_ONE_USER', payload: response.data});
  } catch(error){
      console.log('error getting this one user profile', error);
  }
};

//axios req to set the userlist with response data
function* getUsers() {
  
  const userResponse = yield axios.get('api/user/allusers');
  console.log('get all users', userResponse);
  yield put({
    type: 'SET_USERLIST',
    payload: userResponse.data
  })
}

function* updateProfile(id) {
  //runs POST request to server to update  and description
  // const dataToSend = [id.payload.newUsername, id.payload.newDescription, id.payload.newZip];
  // console.log(`id's payload------------------: ${dataToSend}`);
    try{
      yield axios.put(`/api/user/editProfile`, {data: id.payload});
      console.log('in update user', id.payload);
  } catch(error){
      console.log('error updating user information');
  }
}

function* removeUser(id) {
  //runs delete request to server to remove selected user
    try{
      yield axios.delete(`/api/user/${id.payload}`);
      console.log('in remove user');
  } catch(error){
      console.log('error updating user information');
  }
}

export default userSaga;
