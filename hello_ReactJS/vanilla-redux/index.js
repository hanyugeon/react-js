import { createStore } from 'redux';

const divToggle = document.querySelector('.toggle');
const counter = document.querySelector('h1');
const btnIncrease = document.querySelector('#increase');
const btnDecrease = document.querySelector('#decrease');

// set action
// action type
const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE'; 

// action function
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 초깃값 정의
const initialState = {
  toggle: false,
  counter: 0
}

// set reducer function
// if (state === undefined) { state = initialState }
function reducer(state = initialState, action) {
  // opperate according to action.type
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle
      };

    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };

    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      };

    default:
      return state;
  }
}

// create store
const store = createStore(reducer);

// set render function
const render = () => {
  const state = store.getState();

  // toggle
  if (state.toggle) {
    divToggle.classList.add('active');
  } else {
    divToggle.classList.remove('active');
  }

  // handling counter
  counter.innerText = state.counter;
};

render();
store.subscribe(render);

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};
btnIncrease.onclick = () => {
  store.dispatch(increase(1));
};
btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
