import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";
import * as actions from "../actions/fetch";
import { API_KEY_PIXABAY } from "./../keys/index";
import countries from "./../mocks/countryCodes-min.json";

const API_CALL_REQUEST = "cwa/images/API_CALL_REQUEST";
const API_CALL_SUCCESS = "cwa/images/API_CALL_SUCCESS";
const API_CALL_FAILURE = "cwa/images/API_CALL_FAILURE";

export function* watcherPixabySaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

function fetchData(action) {
  const country = getCountryNameByCountryCode(action.countryCode);
  return axios({
    method: "get",
    url: "https://pixabay.com/api/",
    params: {
      key: API_KEY_PIXABAY,
      q: country ? country[0].name.replace(" ", "+") : null
    }
  });
}

const getCountryNameByCountryCode = (countryCode) => {
  return countries.filter((country) => (country.code == countryCode))
}

const getRandomImage = (images) => (
  images[getRandomArbitrary(0, images.length+1)]
)

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

function* workerSaga(action) {
  try {
    const response = yield call(fetchData, action);
    // dispatch a success action to the store with the new dog
    yield {
      const imageUrl = getRandomImage(response.data.hits);
      put({ type: API_CALL_SUCCESS, imageUrl })
    };
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: API_CALL_FAILURE, error });
  }
}
