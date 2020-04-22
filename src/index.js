import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Fonts/modeseven-L3n5.ttf'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faCoffee, faPlus, faMinus, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

library.add( faCheckSquare, faCoffee, faPlus, faMinus, faChevronLeft, faChevronRight)

ReactDOM.render(
  <React.StrictMode>
    <App style={{fontFamily: 'Mode Seven'}} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
