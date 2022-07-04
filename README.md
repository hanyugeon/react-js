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

## 22.07.04(월)

- SPA

  > html은 한번만 받아와서(이후에 새로 요청 x) 웹 어플리케이션을 실행시킨 후에 그 이후에는 필요한 데이터만 받아와 화면에 업데이트 해주는 것이 SPA이다.
  > 브라우저의 HistoryAPI사용, 주소창 값 변경, 어플리케이션 그대로 유지, 라우팅 설정에 따라 page 변경

- router

  - useParams

    > https:// ... /username/1, username은 pathname, 1은 parameter

  - useNavigate

    > Link 컴포넌트를 사용하지 않고 다른 페이지로 이동을 해야하는 상황에 사용하는 Hook

  - NavLink

    > 경로가 현재 라우트의 경로와 일치할 때 스타일링 적용할 수 있는 component

  - Route path="\*"?

    > 일치하는 라우트가 없다면 해당 라우트가 화면에 나타남

  - Navigate 컴포넌트

    > 컴포넌트를 화면에 보여주는 순간 다른 페이지로 이동을 하고 싶을 때 사용하는 component
    > 예를 들어, 사용자의 로그인이 필요한 페이지인데 로그인을 안했다면 로그인 페이지를 보여주기.(replace={ true })

- 반복되는 무언가가 보일때...

  > 어떻게 리펙토링 할까 고민하기! 참고: router-tutorial/src/pages/articles.js
