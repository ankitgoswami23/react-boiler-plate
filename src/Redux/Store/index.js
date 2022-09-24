import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "../Reducer";
import RootSaga from "../Saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export default function store(initialState) {
  const Store = createStore(
    reducers,
    initialState,
    applyMiddleware(...middlewares)
  );

  sagaMiddleware.run(RootSaga);

  return Store;
}
