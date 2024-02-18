import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Product from './pages/Product';
import Cart from './pages/Cart';
import MainContext from './CartContext/MainContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
let router=createBrowserRouter([
  //Home Page
  {
    path:'/', //http://localhost:3000/
    element:<Home/>
  },
  //Product Page
  {
    path:"/product", //http://localhost:3000/product
    element:<Product/>
  },
  {
    path:'/cart',  //  ttp://localhost:3000/cart
    element:<Cart/>
  }

])

root.render(
  <React.StrictMode>
    <MainContext>
       <RouterProvider router={router}/>
    </MainContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
