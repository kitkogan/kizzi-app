import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* messageSaga() {
    yield takeEvery('GET_MESSAGES', getConvo);
  }


function* getConvo() {  
    const msgResponse = yield axios.get('/api/messages');
    console.log('messages', msgResponse)
    yield put({
        type: 'SET_MESSAGES',
        payload: msgResponse.data
    })
  }

export default messageSaga;  