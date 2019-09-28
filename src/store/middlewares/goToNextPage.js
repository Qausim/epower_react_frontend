import fetchPosts from "./fetchPosts";
import pageNumberUtils from "../../utils/pageNumberUtils";

export default () => async (dispatch, getState) => {
  pageNumberUtils.setPageNumber(pageNumberUtils.getPageNumber() + 1);
  dispatch(fetchPosts());
};
