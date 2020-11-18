import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import React, {Component } from "react";

// import logo from './logo.svg';
// import './App.css';
// import API from "./utils/API";

function App() {
  // const [users, setUsers] = useState([])

  // useEffect(() => {
  //   API.loadUsers()
  //     .then(res => {
  //       if (res.data.length === 0) {
  //         throw new Error("No results found.");
  //       }
  //       if (res.data.status === "error") {
  //         throw new Error(res.data.message);
  //       }
  //       // console.log(res.data.results)
  //       setUsers({users: res.data.results})
  //       console.log(users)
  //     })
  // },[])
  document.title = "Employee Directory";
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
