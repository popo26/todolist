import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App";


//  ReactDOM.createRoot(<h1>Hello World</h1>, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById("root"));

const element = <App />;
root.render(element);


