// import { getDataSaga } from "./sagas";

export function* rootSaga() {
  yield console.log("SAGA");
  console.log("1");
  yield console.log("SAGA 2");
  console.log("2");
  yield console.log("SAGA 3");
  console.log("3");
}
