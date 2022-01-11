import React from 'react';
import MyClassComponent from './MyClassComponent';
import MyComponent from './MyComponent';
import Counter from './Counter';

const App = () => {
  return <Counter />;
  // (
  //   <div>
  //     <MyComponent
  //       name={'React'}
  //       review={'Review'}
  //       type={'PropTypes:'}
  //       favoriteNumber={1}
  //     >
  //       하이, 칠드런
  //     </MyComponent>
  //     <MyClassComponent what={'클래스'} num={2}></MyClassComponent>
  //   </div>
  // );
};

export default App;
