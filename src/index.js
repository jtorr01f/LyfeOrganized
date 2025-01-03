import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./views/Home/Home.view.tsx";
import Tasks from "./views/Tasks/Tasks.view.tsx";
import { Navigation } from "./components/Navigation/Navigation.component.tsx";
import Schedule from "./views/Schedule/Schedule.vew.tsx";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/schedule" element={<Schedule />} />
    </Routes>
  </BrowserRouter>
);