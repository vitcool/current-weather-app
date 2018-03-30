import { watcherSaga } from "./fetchWeather";
import { watcherPixabySaga } from "./getImages";
import { watcherLocationSaga } from "./getLocation";
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield [
    fork(watcherSaga),
    fork(watcherPixabySaga),
    fork(watcherLocationSaga)
  ];
}
