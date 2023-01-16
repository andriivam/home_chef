import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ChefList from './Components/Menu/ChefList';
import Logo from './Components/Logo/Logo';
import Menu from './Components/MenuPage/Menu';
import ChefProfile from './Components/ChefPage/ChefProfile';
import Header from './Components/HomePage/Header';
import Footer from './Components/HomePage/Footer';
import ChefMenu from './Components/ChefPage/ChefMenu'
import ChefItem from './Components/Menu/ChefItem';

function App() {
  return (
    <div className="App">
      <Header/>
      <ChefProfile/> 
      <ChefMenu/>
      
     
      
     

      <Router>
        <Routes>
          {/* <Route path="/" element={<Logo/>}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/home/:ChefList" element={<ChefList />} />
          <Route path="/home/Menu" element={<Menu/>}/> */}
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
