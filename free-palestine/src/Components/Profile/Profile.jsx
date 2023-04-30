import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h2>Name: {user.email}</h2>
    </div>
  );
};

export default Profile;
