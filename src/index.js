import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/app';
import rootReducer from './reducers';

// import { addCharacterById } from './actions';

const store = createStore(rootReducer);
// console.log("store = ", store.getState());
// store.subscribe(() => console.log('store', store.getState()));

// store.dispatch(addCharacterById(2)); //connect action creator with reducers

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root')
)
