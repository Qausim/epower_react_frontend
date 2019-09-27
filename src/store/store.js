import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/rootReducer";

const api = "https://epower.ng/wp-json/wp/v2/posts";

export default createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(api))
);
