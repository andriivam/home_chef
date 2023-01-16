import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ChefList from './Components/Menu/ChefList';
import Logo from './Components/Logo/Logo';
import Menu from './Components/MenuPage/Menu';
import ChefMenu from './Components/ChefPage/ChefMenu';
import ChefProfile from './Components/ChefPage/ChefProfile';

function App() {
  return (
    <div className="App">
      {<ChefProfile/>}
      {<ChefMenu/>}
      <Router>
        <Routes>
          {/* <Route path="/" element={<ChefProfile/>}/>
          <Route path="/home" element={<ChefMenu/>} /> */}
          
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
