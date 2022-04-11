import "./App.css";
import { useState } from "react";
import Nav from "./components/Nav";
import List from "./components/List";
import Modal from "./components/Modal";

const App = () => {
  const [title, setTitles] = useState([
    "마른 남자 옷 추천",
    "키작은 남자 옷 추천",
    "꾸안꾸 코디 모음집",
  ]);
  const [like, setLike] = useState(0);

  return (
    <div className="App">
      <Nav />
      {/* <button onClick={editTitle}>여성</button> */}
      <List title={title} like={like} setLike={setLike} />{" "}
      {/* props 선언 해보기*/}
      {/* 꼭 props로 전달해야 할까? 어느것이 효율적일까? */}
      <Modal />
    </div>
  );
};

export default App;
