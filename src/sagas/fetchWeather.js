import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import * as types from "./../state/ducks/weather/types";

import { API_PATH_OPENWEATHERMAP } from './../consts/api';
import { API_KEY_OPENWEATHERMAP } from './../keys/index';

export function* watcherSaga() {
  yield takeLatest(types.API_CALL_REQUEST, workerSaga);
}

function fetchData(action) {
  return axios({
    method: "get",
    url: API_PATH_OPENWEATHERMAP,
    params: {
      'id' : action.cityId,
      'appid' : API_KEY_OPENWEATHERMAP,
      'units' : 'metric'
    }
  });
}

function* workerSaga(action) {
  try {
    const response = yield call(fetchData, action);
    yield put({ type: types.API_CALL_SUCCESS, response });  
  } catch (error) {
    yield put({ type: types.API_CALL_FAILURE, error });
  }
}