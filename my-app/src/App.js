// import logo from './logo.svg';
import './App.css';
import TasksBar from './components/CreateTasks_Bar/TasksBar';
import TasksList from './components/TasksList/TasksList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import LoginScreen from './components/LoginScreen/LoginScreen';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<LoginScreen />} />
          <Route path="/todo" exact element={<> <TasksBar /><TasksList /> </>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
