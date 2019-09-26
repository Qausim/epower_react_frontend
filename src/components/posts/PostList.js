import React, { Component } from "react";

import PostItem from "./PostItem";
import placeholderImage from "../../assets/post-item-placeholder-image.jpeg";
import "../../styles/post-list.css";

export default class PostList extends Component {
  state = { posts: [] };

  componentDidMount() {
    // Fetch posts here
    const posts = new Array(6).fill(0).map((el, ind) => {
      const title = { rendered: "Lorem ipsum dolor" };
      const slug = title.rendered
        .toLowerCase()
        .split(" ")
        .join("-");
      return {
        id: ind,
        featured_image_thumbnail: placeholderImage,
        title,
        slug,
        excerpt:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste unde modi eligendi eius excepturi?"
      };
    });

    this.setState({ posts });
  }

  render() {
    // Return template here
    const { posts } = this.state;
    const postList = posts.map(post => <PostItem key={post.id} post={post} />);
    const template = postList.length ? (
      postList
    ) : (
      <h3 className="empty-list">No post to view</h3>
    );
    return <div className="post-list">{template}</div>;
  }
}
