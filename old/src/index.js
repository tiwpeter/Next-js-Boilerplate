import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // import Redux store ที่เราสร้างไว้ (ไม่จำเป็นต้องใช้ {} เพราะเป็น default export)

import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
