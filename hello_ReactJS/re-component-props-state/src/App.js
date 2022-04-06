import "./App.css";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState([
    "마른 남자 옷 추천",
    "키작은 남자 옷 추천",
    "꾸안꾸 코디 모음집",
  ]); // [a, b] a에는 state 데이터, b에는 데이터 변경 함수
  // state는 변수 대신 쓰는 데이터 저장 공간
  // 자주 바뀌는, 중요한 데이터를 변수 말고 state로 저장해서 쓰자!
  return (
    <div className="App">
      <div className="nav">
        <div>옷 추천 Blog</div>
      </div>
      <div className="list">
        <h3> {title[0]} </h3>
        <p>04월 06일 발행</p>
        <hr />
        <h3> {title[1]} </h3>
        <p>04월 06일 발행</p>
        <hr />
        <h3> {title[2]} </h3>
        <p>04월 06일 발행</p>
        <hr />
      </div>
    </div>
  );
};

export default App;
