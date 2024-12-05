import React from "react";
import UserList from "./components/userList";
import ContactForm from "./components/contactForm";

function App() {
  return (
    <div className="App">
      <UserList />
      <hr />
      <ContactForm />
    </div>
  );
}

export default App;