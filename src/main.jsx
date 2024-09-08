import "./globalStyles/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { App } from "./components/App";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter basename="/Components/">
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
  );
} else {
  console.error("Root element not found");
}