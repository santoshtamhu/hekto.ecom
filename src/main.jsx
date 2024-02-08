import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
import { ListView } from "./pages/products/ListView.jsx";
import Products from "./pages/products/Products.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Products />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
