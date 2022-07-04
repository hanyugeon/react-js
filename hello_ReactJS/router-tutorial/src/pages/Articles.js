import { NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <Outlet />
      {/* Outlet 컴포넌트는 Route의 children으로 들어가는 JSX 엘리먼트를 보여주는 역할 */}
      {/* 여기서 부모 Route는 Articles, 자식 Route는 Article (App.js 참고)*/}
      {/* 페이지를 만들때 Header 컴포넌트를 따로 만들 수도 있겠지만 Outlet 컴포넌트를 활용하면 컴포넌트를 한번만 사용한다는 장점이 있다. */}
      <ul>
        <ArticleItem id={1} />
        <ArticleItem id={2} />
        <ArticleItem id={3} />
      </ul>
    </div>
  );
};

const ArticleItem = ({ id }) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <li>
      <NavLink
        to={`/articles/${id}`}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        게시글 {id}
      </NavLink>
    </li>
  );
};

export default Articles;
