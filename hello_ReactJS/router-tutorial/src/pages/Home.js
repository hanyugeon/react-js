import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>홈</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="profile/jaehyeon">김재현</Link>
        </li>
        <li>
          <Link to="profile/yugeon">한유건</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
