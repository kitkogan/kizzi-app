import axios from 'axios';
import { put, takeLatest, takeEvery } from 'redux-saga/effects';

//watches for actions and calls the related function
function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeEvery('GET_USERLIST', getUsers);
  yield takeEvery('GET_ONE_USER', getProfile); 
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
  const userResponse = yield axios.get('api/user/all')
  console.log('users', userResponse);
  yield put({
    type: 'SET_USERLIST',
    payload: userResponse.data
  })
}

export default userSaga;
