import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/features/counter/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
