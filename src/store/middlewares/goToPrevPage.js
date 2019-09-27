import decrementPageNumber from "../actions/decrementPageNumber";

export default () => (dispatch, getState) => {
  dispatch(decrementPageNumber());
};
