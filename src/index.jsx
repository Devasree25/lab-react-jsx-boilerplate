import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import elephant from "./images/elephant.jpeg";
import App from './App';
// import AppClass from "./AppClass";
import data from './Component/DataComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={data}/>   
    {/* change the above line - for interchaning between App and AppClass */}
  </React.StrictMode>
);
