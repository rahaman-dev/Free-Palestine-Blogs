import React from "react";
import { Link } from "react-router-dom";

const AllBlogs = ({ blog }) => {
  const {
    _id,
    index,
    balance,
    profileImage,
    age,
    name,
    gender,
    email,
    phone,
    address,
    bio,
    blogImaag,
    blogTitle,
    tags,
    pubsishDay,
    socail,
  } = blog;
  return (
    <div
      style={{
        width: "1000px",
        backgroundColor: "#F3F3F3",
        borderRadius: "10px",
        margin: "10px",
      }}
    >
      <div
        className="images"
        style={{
          display: "flex",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <Link to={`/blogs/${_id}`}>
          <img
            src={blogImaag}
            style={{ width: "300px", height: "200px", borderRadius: "5px" }}
            alt=""
          />
        </Link>

        <div style={{ margin: "20px", width: "600px" }}>
          <p>{tags}</p>
          <Link to={`/blogs/${_id}`} className="textDecorationOnKink">
            <h2
              style={{
                margin: "20px 0",
                color: "black",
              }}
            >
              {blogTitle}
            </h2>
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              {" "}
              <img
                src={profileImage}
                alt=""
                style={{ width: "30px", height: "30px", borderRadius: "50px" }}
              />
              <p>{name}</p>
            </div>
            <p>{pubsishDay}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
