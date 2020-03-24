import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
// import {connect} from 'react-redux';

function* messageSaga() {
    yield takeEvery('GET_MSG', getConvo);
  }


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