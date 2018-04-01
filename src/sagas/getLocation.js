import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import * as types from "./../state/ducks/location/types";
import * as weatherTypes from "./../state/ducks/weather/types";

import fetchImage from "./../state/ducks/images/actions"

import filterCities from '../helpers/getCityIdByName';
import { API_PATH_IP_LOCATION } from './../consts/api';

export function* watcherLocationSaga() {
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
    const city = yield response.data ? response.data.city : null;
    const cities= yield filterCities(city);
    const cityId = yield cities ? cities[0].id : null;
    if (cityId) {
      yield put({ type: weatherTypes.API_CALL_REQUEST, cityId }); 
      yield put(fetchImage.trigger(city)); 
    }
  } catch (error) {
    yield put({ type: types.API_CALL_FAILURE, error });
  }
}