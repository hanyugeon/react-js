import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <Outlet />
      {/* Outlet 컴포넌트는 Route의 children으로 들어가는 JSX 엘리먼트를 보여주는 역할 */}
      {/* 여기서 부모 Route는 Articles, 자식 Route는 Article (App.js 참고)*/}
      {/* 페이지를 만들때 Header 컴포넌트를 따로 만들 수도 있겠지만 Outlet 컴포넌트를 활용하면 컴포넌트를 한번만 사용한다는 장점이 있다. */}
      <ul>
        <li>
          <Link to="/articles/1">게시글 1</Link>
        </li>
        <li>
          <Link to="/articles/2">게시글 2</Link>
        </li>
        <li>
          <Link to="/articles/3">게시글 3</Link>
        </li>
      </ul>
    </div>
  );
};

export default Articles;
