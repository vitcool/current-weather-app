import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import getLocation from "./../state/ducks/location/actions";
import fetchImage from "./../state/ducks/images/actions"
import getWeatherData from "./../state/ducks/weather/actions"

import filterCities from '../helpers/getCityIdByName';
import { API_PATH_IP_LOCATION } from './../consts/api';

export function* watcherLocationSaga() {
  yield takeLatest(getLocation.TRIGGER, workerSaga);
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
    yield put(getLocation.success(response)); 
    const city = yield response.data ? response.data.city : null;
    const cities= yield filterCities(city);
    const cityId = yield cities ? cities[0].id : null;
    if (cityId) {
      yield put(fetchImage.trigger(city)); 
      yield put(getWeatherData.trigger(cityId)); 
    }
  } catch (error) {
    yield put(getLocation.failure(error.message));
  }
  finally {
    yield put(getLocation.fulfill());
  }
}