import React from "react";

const List = ({ title, like, setLike }) => {
  // [a, b] a에는 state 데이터, b에는 데이터 변경 함수
  // state는 변수 대신 쓰는 데이터 저장 공간
  // 자주 바뀌는, 중요한 데이터를 변수 말고 state로 저장해서 쓰자!

  // const editTitle = () => {
  //   // referance data type의 특징으로 인한 deep copy활용
  //   const tempArr = [...title];
  //   // state를 직접 수정 할 수 없음.
  //   tempArr[0] = "마른 여자 옷 추천";
  //   tempArr[1] = "키작은 여자 옷 추천";
  //   tempArr[2] = "귀여운 코디 모음집";
  //   setTitle(tempArr);
  // };

  return (
    <div className="list">
      <h3>
        {" "}
        {title[0]}{" "}
        <span
          onClick={() => {
            setLike(like + 1);
          }}
        >
          👍
        </span>{" "}
        {like}{" "}
      </h3>
      <p>마지막 수정일 04월 07일</p>
      <hr />
      <h3> {title[1]} </h3>
      <p>마지막 수정일 04월 06일</p>
      <hr />
      <h3> {title[2]} </h3>
      <p>마지막 수정일 04월 06일</p>
      <hr />
    </div>
  );
};

export default List;
