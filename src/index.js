import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppProvider } from "./components/context/AppContext";
//components
import Historias from "./components/hisroeias/Historias";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route exact path="/historias" element={<Historias />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
