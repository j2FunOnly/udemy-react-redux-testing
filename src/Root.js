import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';

import asyncMiddleware from 'middlewares/async';
import customDebug from 'middlewares/customDebug';

import reducers from 'reducers';

export default ({children, initState = {}}) => {
  const store = createStore(
    reducers,
    initState,
    applyMiddleware(asyncMiddleware, customDebug)
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
