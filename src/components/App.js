import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../styles/App.css";
import AppHeader from "./AppHeader";
import PostList from "./posts/PostList";
import AppFooter from "./AppFooter";
import PostDetails from "./posts/PostDetails";
import Loader from "./Loader";
import pageUtils from "../utils/pageNumberUtils";

function App() {
  // set page number to 1 if the page is loading the first time
  if (!pageUtils.getPageNumber()) pageUtils.setPageNumber(1);
  return (
    <BrowserRouter>
      <div className="App">
        <Loader />
        <AppHeader />
        <Route exact path="/" component={PostList} />
        <Route exact path="/posts" component={PostList} />
        <Route path="/posts/:slug" component={PostDetails} />
        <AppFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
