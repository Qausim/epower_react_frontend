const initState = {
  headerContent: {
    title: "",
    published: ""
  },
  posts: [],
  currentPost: null,
  currentPage: 1
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SET_APP_HEADER":
      return { ...state, headerContent: action.headerContent };
    case "SET_POSTS":
      return { ...state, posts: action.posts };
    case "SET_CURRENT_POST":
      return { ...state, currentPost: action.currentPost };
    case "INCREMENT_PAGE_NUMBER":
      return { ...state, currentPage: ++state.currentPage };
    case "DECREMENT_PAGE_NUMBER":
      return { ...state, currentPage: --state.currentPage };
    default:
      return state;
  }
};
