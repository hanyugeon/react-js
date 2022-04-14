import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

const TodoList = ({ todos, onRemove, onToggle }) => {
  // props로 받아온 todos
  // map을 사용, TodoListItem으로 이루어진 배열로 변환 및 렌더링
  // 여러 종류의 값을 전달해야하는 경우, 객체로 통쨰로 전달하기. -> 이후 성능 최적화 편리
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList);
