const initState = {
  headerTitle: "",
  posts: []
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SET_APP_HEADER":
      return { ...state, headerTitle: action.headerTitle };
    case "SET_POSTS":
      return { ...state, posts: action.posts };
    default:
      return state;
  }
};
