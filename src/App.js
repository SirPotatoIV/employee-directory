import React, {useState} from 'react';

import './App.css';
import Navbar from "./components/Navbar"
import Table from "./components/Table"
// where I learned about context https://www.youtube.com/watch?v=lhMKvyLRWo0
import { EmployeeContext } from "./components/EmployeeContext"

function App() {
  const [employees, setEmployees] = useState([]);
  const [displayedEmployees, setDisplayedEmployees] = useState([])

  return (
    <div className="App">
      <EmployeeContext.Provider value={{employees, setEmployees, displayedEmployees, setDisplayedEmployees}}>
        <Navbar />
        <Table />
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;
