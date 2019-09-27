import setCurrentPost from "../actions/setCurrentPost";
import setAppHeader from "../actions/setAppHeader";

export default slug => async (dispatch, getState, api) => {
  try {
    console.log(`${api}?slug=${slug}`);
    const [post] = await fetch(`${api}?slug=${slug}`).then(res => res.json());
    dispatch(setCurrentPost(post));
    console.log(post);
    dispatch(
      setAppHeader({
        title: post.title.rendered,
        published: `Published ${new Date(post.date).toDateString()}`
      })
    );
  } catch (error) {
    // console.log('An error occured');
    console.log(error.message);
  }
};
