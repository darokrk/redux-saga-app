import { takeLatest, call } from "redux-saga/effects";
import { ADD_NOTE } from "../actions/addNote";

export function* rootSaga() {
  yield takeLatest(ADD_NOTE, addNoteSaga);
}

function* addNoteSaga({ note }) {
  yield call(console.log, note);
}
