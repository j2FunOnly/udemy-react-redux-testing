export default ({ dispatch }) => next => action => {
  if (action.debugFlag) {
    console.log(action.type, action.payload);
  }

  next(action);
}
