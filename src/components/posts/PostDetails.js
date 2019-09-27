import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";

import "../../styles/post-details.css";
import fetchSinglePost from "../../store/middlewares/fetchSinglePost";

class PostDetails extends Component {
  componentDidMount() {
    const {
      match: {
        params: { slug }
      },
      fetchSinglePost
    } = this.props;
    fetchSinglePost(slug);
  }

  render() {
    return (
      <div className="post-details-wrapper">
        {this.props.currentPost
          ? ReactHtmlParser(this.props.currentPost.content.rendered)
          : ""}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  currentPost: state.currentPost,
  posts: state.posts,
  ...ownProps
});

const mapDispatchToProps = dispatch => {
  return {
    fetchSinglePost(slug) {
      dispatch(fetchSinglePost(slug));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
