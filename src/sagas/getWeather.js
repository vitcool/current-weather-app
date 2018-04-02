import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import getWeatherData from "./../state/ducks/weather/actions"

import { API_PATH_OPENWEATHERMAP } from './../consts/api';
import { API_KEY_OPENWEATHERMAP } from './../keys/index';

export function* watcherSaga() {
  yield takeLatest(getWeatherData.TRIGGER, workerSaga);
}

function fetchData(action) {
  return axios({
    method: "get",
    url: API_PATH_OPENWEATHERMAP,
    params: {
      'id' : action.payload,
      'appid' : API_KEY_OPENWEATHERMAP,
      'units' : 'metric'
    }
  });
}

function* workerSaga(action) {
  try {
    const response = yield call(fetchData, action);
    yield put(getWeatherData.success(response));  
  } catch (error) {
    yield put(getWeatherData.failure(error.message));
  }
  finally {
    yield put(getWeatherData.fulfill());
  }
}