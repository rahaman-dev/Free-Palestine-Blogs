import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideBar = () => {
  const [loadData, setLoadData] = useState();
  useEffect(() => {
    fetch("https://free-palestine-server.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setLoadData(data));
  }, []);

  return (
    <div style={{ backgroundColor: "#ffe0b3" }}>
      {loadData &&
        loadData.map((n, idx) => (
          <Link
            style={{ textDecoration: "none" }}
            to={`/categories/${idx}`}
            key={idx}
          >
            <h2 style={{ margin: "10px 0" }}>{n.name}</h2>
          </Link>
        ))}
    </div>
  );
};

export default LeftSideBar;
