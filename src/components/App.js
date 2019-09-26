import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "../styles/App.css";
import AppHeader from "./AppHeader";
import PostList from "./posts/PostList";
import AppFooter from "./AppFooter";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AppHeader />
        <Route exact path="/" component={PostList} />
        <Route exact path="/posts" component={PostList} />
        <AppFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
