import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { message } from "antd";
message.config({
  top: 80, // Vị trí vertical
  duration: 2, // Thời gian hiển thị (giây)
  maxCount: 1, // Số lượng thông báo hiển thị tối đa
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
