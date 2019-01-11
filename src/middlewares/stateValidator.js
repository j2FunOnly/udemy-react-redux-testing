import tv4 from 'tv4';

import stateSchema from 'middlewares/stateSchema';

export default ({dispatch, getState}) => next => action => {
  next(action);

  const state = getState();
  const result = tv4.validate(state, stateSchema);

  if (!result) {
    console.warn('Invalid state schema detected!');
  }
}
