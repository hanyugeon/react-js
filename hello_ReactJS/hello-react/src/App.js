import React from 'react';
import './App.css';

function App() {
  const name = '리액트';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '24px',
    fontWeight: 'bold',
    padding: 16,
  };

  return (
    <header>
      <div className="react">{name}</div>
      <div style={style}>
        <h2>잘 작동하니?</h2>
        {name === '리액트' ? <h3>리액트가 맞습니다.</h3> : null}
      </div>
      <input /> {/* self-closing 태그 & react 주석 쓰는 방법*/}
    </header>
  );
}

export default App;
