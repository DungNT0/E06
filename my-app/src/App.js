// import logo from './logo.svg';
import './App.css';
import TasksBar from './components/CreateTasks_Bar/TasksBar';
import TasksList from './components/TasksList/TasksList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }

  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
  return (
    <div className="App">
      <div className="login-form">
        {isSubmitted ?
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<> <TasksBar /><TasksList /> </>} />
            </Routes>
          </BrowserRouter> : renderForm}
      </div>

    </div>
  );
}

export default App;
