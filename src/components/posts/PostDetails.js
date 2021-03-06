import React, { Component } from "react";
import ReactHtmlParser from "react-html-parser";
import { connect } from "react-redux";

import "../../styles/post-details.css";
import fetchSinglePost from "../../store/middlewares/fetchSinglePost";
import setCurrentPost from "../../store/actions/setCurrentPost";

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

  componentWillUnmount() {
    const { setCurrentPost } = this.props;
    setCurrentPost(null);
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

const mapStateToProps = ({ currentPost }, ownProps) => ({
  currentPost,
  ...ownProps
});

const mapDispatchToProps = dispatch => {
  return {
    fetchSinglePost(slug) {
      dispatch(fetchSinglePost(slug));
    },
    setCurrentPost(post) {
      dispatch(setCurrentPost(post));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
