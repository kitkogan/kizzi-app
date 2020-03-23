import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// function* getActiveConvos() {
//     try{
//       const msgResponse = yield axios.get('/api/messages');
//       yield put({type: 'SET_MSG',payload: msgResponse.data});
//     }
//     catch(err) {
//       console.log('error fetching convos', err)
//     }
//   }
  
//   function* msgSaga() {
//     yield takeEvery('GET_MSG', getActiveConvos);
//   }
// export default msgSaga;