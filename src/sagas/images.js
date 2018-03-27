import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions/fetch";
import { API_KEY_PIXABAY } from "./../keys/index";

const API_PIXABY_REQUEST = "API_PIXABY_REQUEST";
const API_PIXABY_SUCCESS = "API_PIXABY_SUCCESS";
const API_PIXABY_FAILURE = "API_PIXABY_FAILURE";

export function* watcherPixabySaga() {
  yield takeLatest(API_PIXABY_REQUEST, workerPixabySaga);
}

function fetchPixabyData(action) {
  return axios({
    method: "get",
    url: "https://pixabay.com/api/",
    params: {
      key: API_KEY_PIXABAY,
      q: action.country
    }
  });
}

function* workerPixabySaga(action) {
  try {
    const response = yield call(fetchPixabyData, action);
    // dispatch a success action to the store with the new dog
    yield put({ type: API_PIXABY_SUCCESS, response });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: API_PIXABY_FAILURE, error });
  }
}
