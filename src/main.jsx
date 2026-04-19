// main.jsx

import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import "./index.css";

import Home from "./Component/Home";
import App from "./App";
import Errorpage from './Component/Errorpage';
import AllBooks from "./Component/AllBooks";
import Bestsellers from "./Component/Bestsellers";
import Contact from "./Component/Contact";
import BookDetails from "./Component/BookDetails";
import { CartProvider } from './context/CartContext';
import CartPage from "./Component/CartPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <App />, 
      },
      {
         path:"/browesbooks",
         element:<AllBooks></AllBooks>,
      },
      {
        path:"Bestsellers",
        element:<Bestsellers></Bestsellers>,
      },
      {
        path:"contact",
        element:<Contact></Contact>
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
      },
      {
  path: "/cart",
  element: <CartPage />,
},
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)