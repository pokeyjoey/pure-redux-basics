import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 0
};

// redux store needs a reducer function.
function reducer(state = initialState, action) {
  console.log('reducer', state, action);

  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
    }
}

// create the redux store
const store = createStore(reducer);

// all dispatch on the store with an action.
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });

const App = () => (
  <Provider store={store}>
      <Counter/>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
