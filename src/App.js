import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profiles from "./Profiles";
// import Profile from "./Profile";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to={"/"}>홈</Link>
        </li>
        <li>
          <Link to={"/about"}>소개</Link>
        </li>
        <li>
          <Link to={"/profiles"}>프로필 목록</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/*" element={<Profiles />} />
        {/* 쿼리 라우터 */}
        {/* <Route path="/profiles/:username" element={<Profile />} /> */}
      </Routes>
    </div>
  );
};

export default App;
