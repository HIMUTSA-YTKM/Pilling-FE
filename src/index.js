import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import axios from "axios";
import "./reset.css";
import "./index.css";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RecoilRoot><App /></RecoilRoot>);

axios.defaults.withCredentials = true;
