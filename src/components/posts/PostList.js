import React, { Component } from "react";
import { connect } from "react-redux";

import PostItem from "./PostItem";
import "../../styles/post-list.css";
import setAppHeader from "../../store/actions/setAppHeader";
import setPosts from "../../store/actions/setPosts";
import fetchPosts from "../../store/middlewares/fetchPosts";
import Paginator from "./Paginator";

class PostList extends Component {
  componentDidMount() {
    // Fetch posts here
    this.props.setAppHeader({ title: "Epower Blog", published: "" });
    this.props.fetchPosts();
  }

  render() {
    // Return template here
    const { posts } = this.props;
    const postList = posts
      ? posts.map(post => <PostItem key={post.id} post={post} />)
      : [];
    console.log(postList);
    const template = postList.length ? (
      postList
    ) : (
      <h3 className="empty-list">No post to view</h3>
    );
    return <div className="post-list">{template}</div>;
  }
}

const mapDispatchToProps = dispatch => ({
  setAppHeader(headerContent) {
    dispatch(setAppHeader(headerContent));
  },

  setPosts() {
    dispatch(setPosts());
  },

  fetchPosts() {
    dispatch(fetchPosts());
  }
});

const mapStateToProps = (state, ownProps) => ({
  posts: state.posts,
  ...ownProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
