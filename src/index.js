import React from 'react';
//import ReactDOM from '../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './frontend/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
