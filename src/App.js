import React from 'react';
import './App.css';
import Footer from './Components/HomePage/Footer';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from './Components/HomePage/Header'
import MainSection from './Components/HomePage/MainSection';
import ChefProfile from './Components/ChefPage/ChefProfile';
import Catagories from './Components/HomePage/Catagories';
import ChefMenu from './Components/ChefPage/ChefMenu';

function App() {
  return (
    <div className="App">
        <Header />
        <ChefProfile/>
        <ChefMenu/>
      <Router>
        <Routes>
        </Routes>
        <Footer/>
      </Router>
 
    </div>
  );
}

export default App;
