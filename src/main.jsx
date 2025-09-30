import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ProductsProvider } from "./context/ProductsContext";
import { CategoriesProvider } from './context/CategoriesContext';
import { MobileScreenProvider } from './context/MobileScreenContext';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <ProductsProvider>
      <CategoriesProvider>
        <MobileScreenProvider>
          <App />
        </MobileScreenProvider>
      </CategoriesProvider>
    </ProductsProvider>

  </React.StrictMode>
);
