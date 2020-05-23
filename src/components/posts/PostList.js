import React, { Component } from "react";
import { connect } from "react-redux";

import PostItem from "./PostItem";
import "../../styles/post-list.css";
import setAppHeader from "../../store/actions/setAppHeader";
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
    const template = posts.length ? (
      <div className="post-list">
        {posts.map(post => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    ) : (
      <h3 className="empty-list">No post to view</h3>
    );

    return (
      <div className="post-list-wrapper">
        {template}
        <Paginator />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setAppHeader(headerContent) {
    dispatch(setAppHeader(headerContent));
  },

  fetchPosts() {
    dispatch(fetchPosts());
  }
});

const mapStateToProps = ({ posts }, ownProps) => ({
  posts,
  ...ownProps
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
