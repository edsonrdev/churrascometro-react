import React from "react";
import ReactDOM from "react-dom/client";

import { Toaster } from 'react-hot-toast';
import { GlobalStyles } from "./styles";
import { Contexts } from "./contexts";
import { App } from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Toaster />
    <GlobalStyles />
    <Contexts>
      <App />
    </Contexts>
  </React.StrictMode>
);
