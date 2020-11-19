import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";


// import logo from './logo.svg';
// import './App.css';
// import API from "./utils/API";

function App() {
  document.title = "Employee Directory";
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
