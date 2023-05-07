import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionTypes';
import axios from 'axios';
import { initListAction } from './actionCreators';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getInitList() {
    try {
        const res = yield axios.get('http://127.0.0.1:4523/m1/2674321-0-default/api/todolist.json')
        const action = initListAction(res.data)
        yield put(action)
    } catch (e) {
        console.log(e)
    }

}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList)
}



export default mySaga