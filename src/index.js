import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './Redux/store'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
import TimeAgo from 'javascript-time-ago'
 
import en from 'javascript-time-ago/locale/en'
 
TimeAgo.addDefaultLocale(en)
ReactDOM.render(
    <Provider store = { store }>
<App /></Provider>,
 document.getElementById('root'));
 if(module.hot){
    module.hot.accept()
 }
registerServiceWorker();
