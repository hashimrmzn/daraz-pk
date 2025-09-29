import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ProductsProvider } from "./context/ProductsContext";
import {CategoriesProvider} from './context/CategoriesContext'
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <ProductsProvider>
         <CategoriesProvider> 
        <App />
        </CategoriesProvider>
      </ProductsProvider>
    </HashRouter>
  </React.StrictMode>
);
