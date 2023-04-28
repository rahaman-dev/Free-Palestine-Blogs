import React from "react";
import { useLoaderData } from "react-router-dom";
import "./blog.css";

const Blog = () => {
  const blog = useLoaderData();
  const { profileImage, name, blogImaag, blogTitle, tags, article } = blog;

  const formattedArticle = article.replace(/\n/g, "<br/>");

  return (
    <div className="blogContainer">
      <h2 className="blogTile">{blogTitle}</h2>
      <div className="blogProfileImageFlex">
        <div>
          {" "}
          <img src={profileImage} alt="" className="blogProfileImage" />
        </div>
        <h4>{name}</h4>
      </div>
      <img src={blogImaag} alt="" className="blogImage" />
      <p
        className="article"
        dangerouslySetInnerHTML={{ __html: formattedArticle }}
      ></p>
    </div>
  );
};

export default Blog;
