import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';

render(<App />, document.querySelector('#root'));
