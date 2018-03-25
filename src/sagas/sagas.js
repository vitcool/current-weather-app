import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import * as actions from '../actions/fetch';
import { API_KEY } from './../keys/index';

// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

// function that makes the api request and returns a Promise for response
function fetchData(action) {
  return axios({
    method: "get",
    url: "http://api.openweathermap.org/data/2.5/weather",
    params: {
      'id' : action.cityId,
      'appid' : API_KEY,
      'units' : 'metric'
    }
  });
}

// worker saga: makes the api call when watcher saga sees the action
function* workerSaga(action) {
  try {
    const response = yield call(fetchData, action);
    // dispatch a success action to the store with the new dog
    yield put({ type: API_CALL_SUCCESS, response });
  
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: API_CALL_FAILURE, error });
  }
}