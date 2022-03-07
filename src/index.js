import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

ReactDOM.render(<App />, document.getElementById('root'));


// The react-dom package provides DOM-specific methods that can be used at the top level of your app 
// and as an escape hatch to get outside of the React model if you need to.
// Most of your components should not need to use this module.
// Render a React element into the DOM in the supplied container

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
