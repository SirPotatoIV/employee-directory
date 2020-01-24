import React, {useEffect, useState} from 'react';
import axios from 'axios'
import './App.css';
import Navbar from "./components/Navbar"
import Table from "./components/Table"

//Check out 20-State/03-Stu_useState
function App() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then((res) => {
      setEmployees(res.data.results);
    })
  }, []);

  console.log(employees)
  return (
    <div className="App">
      <Navbar />
      <Table />
    </div>
  );
}

export default App;
