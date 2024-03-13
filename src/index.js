import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginSignup from './Components/Login-Signup/LoginSignup';
import Home from './Components/Home/Home'
import Products from './Components/Products/Products';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/mycart",
    element: <App/>,
  },
  {
    path: "/login",
    element: <LoginSignup/>,
  },
  {
    path: "/home",
    element: <Home/>,
  },
  {
    path: "/products",
    element: <Products/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <App/> */}
  <RouterProvider router={router} />
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
