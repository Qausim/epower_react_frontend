import setPosts from "../actions/setPosts";
import showLoader from "../actions/showLoader";
import setLastPageReached from "../actions/setLastPageReached";
import pageNumberUtils from "../../utils/pageNumberUtils";

export default () => async (dispatch, getState, api) => {
  try {
    dispatch(showLoader(true));
    const currentPage = pageNumberUtils.getPageNumber();
    let posts = await fetch(`${api}?per_page=6&page=${currentPage}`).then(res =>
      res.json()
    );

    if (
      posts.code &&
      posts.code === "rest_post_invalid_page_number" &&
      currentPage > 1
    ) {
      posts = [];
      dispatch(setLastPageReached(true));
    } else dispatch(setLastPageReached(false));

    dispatch(setPosts(posts));
  } catch (error) {
    console.log("An error occured");
  }
  dispatch(showLoader(false));
};
