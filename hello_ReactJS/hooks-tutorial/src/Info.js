import React, { useEffect, useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  useEffect(() => {
    console.log("effect");
    return () => {
      console.log("unmount");
    };
  }, []);
  // 특정 값이 업데이트 될 떄만 실행하고 싶을 때 => 배열에 해당 값 넣어주기.
  // 마운트될 때만 실행하고 싶을 때 => 두 번째 파라미터로 비어 있는 배열 넣어주기.

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div>
    </div>
  );
};

export default Info;
