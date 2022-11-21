import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
  robbins: {
    name: "박건형",
    description: "Frontend Engineer",
  },
  velopert: {
    name: "김민준",
    description: "잘하는사람..",
  },
};

const Profile = () => {
  // parameter를 받아올때 match안에 들어있는 params 값을 참조.
  const { username } = useParams();
  const profile = profileData[username];
  if (!profile) {
    return <div>not exists user</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
