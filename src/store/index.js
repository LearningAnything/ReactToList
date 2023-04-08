
import { legacy_createStore } from "redux";
import reducer from "./reducer";

const store = legacy_createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENTION__ && window.__REDUX_DEVTOOLS_EXTENTION__()
);

export default store;
