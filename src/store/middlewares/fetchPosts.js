import setPosts from "../actions/setPosts";

export default () => async (dispatch, getState, api) => {
  console.log(getState());
  try {
    const { currentPage } = getState();
    const posts = await fetch(`${api}?per_page=6&page=${currentPage}`).then(
      res => res.json()
    );
    dispatch(setPosts(posts));
  } catch (error) {
    console.log("An error occured");
  }
};
