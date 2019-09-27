import incrementPageNumber from "../actions/incrementPageNumber";

export default () => (dispatch, getState) => {
  dispatch(incrementPageNumber());
};
