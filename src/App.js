import React from "react";
import LoginForm from "./components/LoginForm";
import Pagination from "./components/Pagination";
import User from "./components/User";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <User/>
      <hr />
      <Contact/>
      <hr />
      <Pagination/>
      <hr />
      <LoginForm/>
    </div>
  );
}

export default App;
