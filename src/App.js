import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ChefList from './Components/Menu/ChefList';
import Logo from './Components/Logo/Logo';
import Menu from './Components/MenuPage/Menu';
import ChefProfile from './Components/ChefPage/ChefProfile';
import Header from './Components/HomePage/Header';
import Footer from './Components/HomePage/Footer';
import ChefMenu from './Components/ChefPage/ChefMenu'
import ChefItem from './Components/Menu/ChefItem';
// import ChefMenu from './Components/ChefPage/ChefMenu';
// import ChefProfile from './Components/ChefPage/ChefProfile';


function App() {

  return (
    <div className="App">
      {/* {<ChefProfile/>}
      {<ChefMenu/>} */}
      <Router>
        <Routes>
          <Route path="/" element={<Logo/>}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/home/Menu" element={<Menu/>}/>
          <Route path="/home/:id/ChefList" element={<ChefList/>} />
        </Routes>
       
      </Router>
    
    </div>
  );
}

export default App;
