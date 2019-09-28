import fetchPosts from "./fetchPosts";
import pageNumberUtils from "../../utils/pageNumberUtils";

export default () => (dispatch, getState) => {
  const currentPage = pageNumberUtils.getPageNumber();
  if (currentPage > 1) {
    pageNumberUtils.setPageNumber(pageNumberUtils.getPageNumber() - 1);
    dispatch(fetchPosts());
  }
};
