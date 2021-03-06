const initState = {
  headerContent: {
    title: "",
    published: ""
  },
  posts: [],
  currentPost: null,
  showLoader: false,
  lastPageReached: false
};

export default (state = initState, action) => {
  switch (action.type) {
    case "SET_APP_HEADER":
      return { ...state, headerContent: action.headerContent };
    case "SET_POSTS":
      return { ...state, posts: action.posts };
    case "SET_CURRENT_POST":
      return { ...state, currentPost: action.currentPost };
    case "SHOW_LOADER":
      return { ...state, showLoader: action.showLoader };
    case "SET_LAST_PAGE_REACHED":
      return { ...state, lastPageReached: action.lastPageReached };
    default:
      return state;
  }
};
