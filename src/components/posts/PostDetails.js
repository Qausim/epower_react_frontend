import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";

import fetchSinglePost from "../../store/actions/fetchSinglePost";
import setAppHeader from "../../store/actions/setAppHeader";
import "../../styles/post-details.css";

class PostDetails extends Component {
  componentDidMount() {
    const {
      match: { params: slug }
    } = this.props;
    console.log(this.props);
    this.props.fetchSinglePost(slug);
    setTimeout(() => {
      this.props.setAppHeader({
        title: this.props.currentPost.title.rendered,
        published: `Published ${new Date(
          this.props.currentPost.date
        ).toDateString()}`
      });
    }, 1000);
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
    },
    setAppHeader(headerContent) {
      dispatch(setAppHeader(headerContent));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
