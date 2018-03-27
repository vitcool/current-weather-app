import { watcherSaga } from "./fetch";
import { watcherPixabySaga } from "./images";
import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield [
    fork(watcherSaga), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
    fork(watcherPixabySaga)
  ];
}
