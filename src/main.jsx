// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'; 
// import './index.css'
// import App from './App.jsx'
// import React from "react";
// import ReactDOM from "react-dom";
// import { CartProvider } from "./context/CartContext";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <CartProvider>
//       <App />
//     </CartProvider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App.jsx';
import { CartProvider } from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
