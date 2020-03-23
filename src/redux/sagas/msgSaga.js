import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

function* getConvo() {
    
      const msgResponse = yield axios.get('/api/messages');
      console.log('messages', msgResponse)
      yield put({
        type: 'SET_MSG',
        payload: msgResponse.data
      })
  }
  
  function* msgSaga() {
    yield takeEvery('GET_MSG', getConvo);
  }
export default msgSaga;