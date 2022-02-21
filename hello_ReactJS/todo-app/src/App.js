import React, { useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

const App = () => {
  // 초기 상태 설정
  const [todos, setTodos] = useState([
    // todos 라는 상태 정의, setTodos 세터함수.
    {
      id: 1,
      text: "리액트의 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 해보기",
      checked: true,
    },
    {
      id: 3,
      text: "일정 관리 앱 만들어 보기",
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} /> {/* todos를 TodoList.js의 props로 넘겨주기*/}
    </TodoTemplate>
  );
};

export default App;
