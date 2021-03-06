import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';

import App from './components/App';
import './index.less';

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
), document.getElementById('root'))

if (DEVELOPMENT && module.hot ) {
 module.hot.accept();
}
