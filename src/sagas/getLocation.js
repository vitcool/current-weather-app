import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import * as types from "./../state/ducks/location/types";
import * as weatherTypes from "./../state/ducks/weather/types";
import * as imagesTypes from "./../state/ducks/images/types";

import { API_PATH_IP_LOCATION } from './../consts/api';

export function* watcherSaga() {
  yield takeLatest(types.API_CALL_REQUEST, workerSaga);
}

function fetchData(action) {
  return axios({
    method: "get",
    url: API_PATH_IP_LOCATION
  });
}

function* workerSaga(action) {
  try {
    const response = yield call(fetchData, action);
    yield put({ type: types.API_CALL_SUCCESS, response });  
    yield put({ type: weatherTypes.API_CALL_REQUEST, response }); 
  } catch (error) {
    yield put({ type: types.API_CALL_FAILURE, error });
  }
}