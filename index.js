import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Получаем корневой DOM-элемент из public/index.html.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Рендерим React-приложение внутрь div#root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
