import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import userService from './services/userService';
import { UserContext } from './utils/context';

const user = userService.getCurrentUser();

ReactDOM.render(
  <UserContext.Provider value={user}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </UserContext.Provider>,
  document.getElementById('root')
);
