import setPosts from "../actions/setPosts";
import showLoader from "../actions/showLoader";
import pageNumberUtils from "../../utils/pageNumberUtils";

export default () => async (dispatch, getState, api) => {
  try {
    dispatch(showLoader(true));
    const currentPage = pageNumberUtils.getPageNumber();
    const posts = await fetch(`${api}?per_page=6&page=${currentPage}`).then(
      res => res.json()
    );
    dispatch(setPosts(posts));
  } catch (error) {
    console.log("An error occured");
  }
  dispatch(showLoader(false));
};
