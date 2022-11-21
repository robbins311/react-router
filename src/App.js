import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import HistorySample from "./HistorySample";
import Home from "./Home";
import Profiles from "./Profiles";
// import Profile from "./Profile";

const App = () => {
  const { pathname } = useLocation();
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
        <li>
          <Link to={"/history"}>history 연습</Link>
        </li>
      </ul>
      <hr />
      <switch>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profiles/*" element={<Profiles />} />
          <Route path="/history" element={<HistorySample />} />
          {/* 쿼리 라우터 */}
          {/* <Route path="/profiles/:username" element={<Profile />} /> */}

          {/* not found 404 */}
          <Route
            path="/*"
            element={<h1>이 페이지는 존재하지 않습니다. - {pathname}</h1>}
          />
        </Routes>
      </switch>
    </div>
  );
};

export default App;
