import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//triggered from the conversations component
//to get all of the conversation messages by user ids
function* messageSaga() {
    yield takeEvery('GET_MSG', getConvo);
    // create one for SEND_MSG, sendMsg
  }

// TODO 
// create function* sendMsg
// make an axios POST request to update the message database (with the conversation id)

  //triggered by the messageSaga generator function
  //sets state for messages
function* getConvo(action) {  
  console.log('logging action payload from getConvo', action.payload);
  
    const msgResponse = yield axios.get(`/api/messages/${action.payload}`);
    console.log('messages', msgResponse)
    yield put({
        type: 'SET_MSG',
        payload: msgResponse.data
    })
  }

export default messageSaga;  