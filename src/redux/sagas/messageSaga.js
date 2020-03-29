import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

//triggered from the conversations component
//to get all of the conversation messages by user ids
function* messageSaga() {
    yield takeEvery('GET_MSG', getConvo);
    yield takeEvery('ADD_MSG', sendMsg);
  }

// TODO 
// create function* sendMsg
// make an axios POST request to update the message database (with the conversation id)
function* sendMsg(action) {

  console.log('action:', action);
  
    try {
        yield axios.post(`/api/messages`, action.payload);
        console.log('logging action payload from sendMsg', action.payload);
        yield put({ type: 'GET_MSG', payload: action.payload });
    } catch (error) {
        console.log('error posting new message', error);
    }    
}

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