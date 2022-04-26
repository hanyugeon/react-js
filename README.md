# whatToDo

## 22.04.23(토)

- react-router-dom을 왜 써야할까?

  > 예를 들어 Main 페이지에서 다른 페이지로 이동할 때 새로운 html을 받아와야한다. <br>
  > 그 대신에 react-router-dom을 이용하면 페이지 이동이 아닌 페이지에 필요한 컴포넌트들을 불러오게 된다. <br>
  > 이때 바뀌지 않는 부분은 새로 불러오지 않기 때문에 자원관리에 좋다. <br>
  > 해당 페이지에서 로딩된 주소상태에 따라 다양한 화면을 보여줄 수 있다. <br>

- SPA(single page application)의 단점

  > 앱의 규모가 커질수록 js파일 크기도 너무 커질 뿐만 아니라 페이지 로딩 시 실제로 방문하지 않은 수도 있는 페이지와 관련된 컴포넌트 코드도 불러오기 때문이다.

## 22.04.26(화)

- Outlet 컴포넌트?
  > Outlet 컴포넌트는 Route의 children으로 들어가는 JSX 엘리먼트를 보여주는 역할 <br>
  > 여기서 부모 Route는 Articles, 자식 Route는 Article (App.js 참고) <br>
  > 페이지를 만들때 Header 컴포넌트를 따로 만들 수도 있겠지만 Outlet 컴포넌트를 활용하면 컴포넌트를 한번만 사용한다는 장점이 있다.<br>
