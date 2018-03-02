import { createStore, applyMiddleware, compose } from 'redux'
// import createSagaMiddleware from 'redux-saga'

// import rootReducer from '../reducers';
const rootReducer = () => {
  
};
// const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line
export default createStore(
  rootReducer,
  // composeEnhancers(applyMiddleware(thunk, sagaMiddleware)),
);

// sagaMiddleware.run(rootSaga)
