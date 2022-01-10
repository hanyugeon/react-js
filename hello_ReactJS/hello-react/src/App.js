import React from 'react';
import MyClassComponent from './MyClassComponent';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <MyComponent
      name={'React'}
      review={'Review'}
      type={'PropTypes:'}
      favoriteNumber={1}
    >
      하이, 칠드런
    </MyComponent>
  );
};

export default App;
