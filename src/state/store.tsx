import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReduxer";

const store = configureStore({reducer: rootReducer});
export default store;