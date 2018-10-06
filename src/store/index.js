import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import { initSagas } from "./initSagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function store(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );
  initSagas(sagaMiddleware);
  return store;
}
