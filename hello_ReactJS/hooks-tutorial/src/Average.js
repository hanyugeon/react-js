import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null); // 1. useRef를 활용하여 등록 버튼을 눌렀을 때 인풋쪽으로 포커스 되게.

  // useMemo와는 비슷하지만 컴포넌트가 리렌더링 될때마다 함수가 새로 만들어지는 부분 최적화 시켜줌.
  // useCallback의 첫 번째 파라미터에는 생성하고 싶은 함수를 넣고 두 번째 파라미터에는 배열을 넣는다.
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []); // 컴포넌트가 처음 렌더링될 때만 함수 생성

  const onInsert = useCallback(() => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber("");
    inputEl.current.focus(); // 2.
  }, [number, list]); // number혹은 list가 바뀌었을 때만 함수 생성

  // 실행하고 useMemo 활용하기 전과 후에 콘솔에 나타나는 값과 비교해보기
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} /* 3. */ />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
