import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router,Route, Routes, Navigate } from "react-router-dom";
import Home from './Component/Home/Home';
import Personpost from './Component/Personpost/Personpost';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element= {<Home></Home>}/> 
    </Routes>
    
    <Routes>
      <Route exact path="/about/:posterID" element= {<Personpost ></Personpost>}/> 
    </Routes>
    </div>
  );
}

export default App;
