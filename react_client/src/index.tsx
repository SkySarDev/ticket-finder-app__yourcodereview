import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { rootStore } from "@store/rootStore";
import App from "@app/App";
import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={rootStore}>
      <App />
    </Provider>
  </BrowserRouter>
);
