import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions/fetch";
import { API_KEY_PIXABAY } from "./../keys/index";

const API_CALL_REQUEST = "cwa/images/API_CALL_REQUEST";
const API_CALL_SUCCESS = "cwa/images/API_CALL_SUCCESS";
const API_CALL_FAILURE = "cwa/images/API_CALL_FAILURE";

export function* watcherPixabySaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

function fetchData(action) {
  return axios({
    method: "get",
    url: "https://pixabay.com/api/",
    params: {
      key: API_KEY_PIXABAY,
      q: action.country
    }
  });
}

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
