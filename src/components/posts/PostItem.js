import React from "react";
import { Link } from "react-router-dom";

import "../../styles/post-item.css";

const PostItem = props => {
  const { post } = props;
  return (
    <Link to={`/posts/${post.slug}`}>
      <div className="post-item-wrapper">
        <div className="img-wrapper">
          <img src={post.featured_image_thumbnail} alt={post.title.rendered} />
        </div>
        <div className="text-wrapper text--aligned-center">
          <h2 className="title">{post.title.rendered}</h2>
          <p className="excerpt">{post.excerpt.rendered}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
