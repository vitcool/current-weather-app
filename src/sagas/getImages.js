import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

import fetchImage from "./../state/ducks/images/actions";

import { API_PATH_PIXABAY } from './../consts/api';
import { API_KEY_PIXABAY } from "./../keys/index";

export function* watcherPixabySaga() {
  yield takeLatest(fetchImage.TRIGGER, workerSaga);
}

function fetchData(action) {
  const city = action.payload;
  return axios({
    method: "get",
    url: API_PATH_PIXABAY,
    params: {
      key: API_KEY_PIXABAY,
      q: city ? city.replace(" ", "+") : null,
      orientation: "horizontal"
    }
  });
}

const getRandomImage = (images) => {
  return images[getRandomArbitrary(0, images.length)].largeImageURL
}

const getRandomArbitrary = (min, max) => (
  Math.floor(Math.random() * (max - min) + min)
)

function* workerSaga(action) {
  try {
    const response = yield call(fetchData, action);
    const imageUrl = yield getRandomImage(response.data.hits);
    yield put(fetchImage.success(imageUrl))
  } 
  catch (error) {
    yield put(fetchImage.failure(error.message));
  }
  finally {
    yield put(fetchImage.fulfill());
  }
}
