import setCurrentPost from "../actions/setCurrentPost";
import setAppHeader from "../actions/setAppHeader";
import showLoader from "../actions/showLoader";
import months from "../../utils/months";

export default slug => async (dispatch, getState, api) => {
  try {
    dispatch(showLoader(true));
    const [post] = await fetch(`${api}?slug=${slug}`).then(res => res.json());
    dispatch(setCurrentPost(post));
    const postDate = new Date(post.date);
    const formattedDate = `${
      months[postDate.getMonth()]
    } ${postDate.getDate()}, ${postDate.getFullYear()}`;
    dispatch(
      setAppHeader({
        title: post.title.rendered,
        published: `published on ${formattedDate}`
      })
    );
  } catch (error) {
    console.log("An error occured");
  }
  dispatch(showLoader(false));
};
