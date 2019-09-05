import { createStore } from "redux";
import rootReducer from "../reducers/index";
import addNote from "../actions/addNote";

const store = createStore(rootReducer);

export default store;
