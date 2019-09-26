import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import PostList from "./components/posts/PostList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PostList />
      </div>
    </BrowserRouter>
  );
}

export default App;
