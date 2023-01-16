import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ChefList from './Components/Menu/ChefList';
import Logo from './Components/Logo/Logo';
import Menu from './Components/MenuPage/Menu';
import Lastpage from './Components/LastPageOrdering/Lastpage';
import Loginpage from './Components/LoginPage/Loginpage';
import MenuHamburger from './Components/MenuHamburger/MenuHamburger';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Logo/>}/>
          <Route path="/" element={<Loginpage/>}/>
          <Route path="/" element={<Lastpage/>}/>
          <Route path="/" element={<MenuHamburger/>}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/home/:ChefList" element={<ChefList />} />
          <Route path="/home/Menu" element={<Menu/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;