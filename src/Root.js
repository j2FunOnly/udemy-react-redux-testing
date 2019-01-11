import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';

import asyncMiddleware from 'middlewares/async';
import customDebug from 'middlewares/customDebug';
import stateValidator from 'middlewares/stateValidator';

import reducers from 'reducers';

export default ({children, initState = {}}) => {
  const store = createStore(
    reducers,
    initState,
    applyMiddleware(asyncMiddleware, customDebug, stateValidator)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
