import { createStore } from "redux";
import { rootReducer } from "./AppReducer";

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;