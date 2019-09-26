import placeholderImage from "../../assets/post-item-placeholder-image.jpeg";

export default () => {
  const posts = new Array(6).fill(0).map((el, ind) => {
    const title = { rendered: "Lorem ipsum dolor" };
    const slug = title.rendered
      .toLowerCase()
      .split(" ")
      .join("-");
    return {
      id: ind,
      date: new Date().toISOString(),
      featured_image_thumbnail: placeholderImage,
      title,
      slug,
      excerpt:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum iste unde modi eligendi eius excepturi?"
    };
  });

  return {
    type: "SET_POSTS",
    posts
  };
};
