import React from "react";
import { useLoaderData } from "react-router-dom";
import CategoryCart from "./CategoryCart";
import LeftSideBar from "../Home/LeftSideBar/LeftSideBar";

const Categories = () => {
  const loadData = useLoaderData();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ backgroundColor: "#ffe0b3", width: "15%" }}>
        <LeftSideBar></LeftSideBar>
      </div>
      <div>
        {" "}
        {loadData.map((n, idx) => (
          <CategoryCart key={idx} data={n}></CategoryCart>
        ))}
      </div>
      <div style={{ backgroundColor: "#ffe0b3", width: "15%" }}>
        Right Side Bar
      </div>
    </div>
  );
};

export default Categories;
