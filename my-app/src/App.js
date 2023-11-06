// import logo from './logo.svg';
import './App.css';
import CreateTasksBar from './components/CreateTasks_Bar/CreateTasksBar';
import { BrowserRouter } from "react-router-dom";
import React from 'react';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <CreateTasksBar />
      </BrowserRouter>
    </div>
  );
}

export default App;
