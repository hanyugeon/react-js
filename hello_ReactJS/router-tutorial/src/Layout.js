import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // 이전 페이지로 이동
    navigate(-1);
  };

  const goArticles = () => {
    // articles 경로로 이동
    navigate("./articles", { replace: true });
    // replace는 어느 상황에 쓰일까?
    // true 일 때, 페이지 이동시 현재 페이지를 페이지 기록에 남기지 않음.
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontsize: 24 }}>
        <button onClick={goBack}>뒤로 가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
