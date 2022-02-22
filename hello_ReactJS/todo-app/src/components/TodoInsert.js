import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = () => {
  const [value, setValue] = useState("");

  // useCallback Hook을 활용하여 추가하고 다시 입력 준비상태로.
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return (
    <form className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
