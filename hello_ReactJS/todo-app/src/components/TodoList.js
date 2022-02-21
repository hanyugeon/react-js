import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos }) => {
  // props로 받아온 todos
  return (
    <div className="TodoList">
      {todos.map(
        (
          todo // map을 사용, TodoListItem으로 이루어진 배열로 변환 및 렌더링
        ) => (
          <TodoListItem todo={todo} key={todo.id} />
        ) // 여러 종류의 값을 전달해야하는 경우, 객체로 통쨰로 전달하기. -> 이후 성능 최적화 편리
      )}
    </div>
  );
};

export default TodoList;
