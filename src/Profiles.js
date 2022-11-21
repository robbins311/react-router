import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>유저 목록: </h3>
      <ul>
        <li>
          <Link to={"/profiles/robbins"}>robbins</Link>
        </li>
        <li>
          <Link to={"/profiles/velopert"}>velopert</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element="유저를 선택해주세용" />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
