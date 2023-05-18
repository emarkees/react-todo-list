import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/app.css';
import TodoApp from './Component/TodoApp.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
