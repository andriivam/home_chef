import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ChefList from './Components/Menu/ChefList';
import Logo from './Components/Logo/Logo';
import Menu from './Components/MenuPage/Menu';
import LoginPage from './Components/LoginPage/LoginPage';
import ChefForm from './Components/UserChef/ChefForm';
import ChefMenu from './Components/UserChef/ChefMenu';
import UserForm from './Components/UserForm/UserForm';
// import ChefMenu from './Components/ChefPage/ChefMenu';
import ChefProfileFull from './Components/ChefPage/ChefProfileFull';


function App() {

  return (
    <div className="App">
      {/* {<ChefProfile/>}
      {<ChefMenu/>} */}
      <Router>
        <Routes>
          <Route path="/" element={<Logo/>}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/home/:id/ChefList" element={<ChefList />} />
          <Route path="/home/Menu" element={<Menu/>}/>
          <Route path="/home/Loginpage" element={<LoginPage/>}/>
          <Route path="/home/chefForm" element={<ChefForm/>}/>
          <Route path="/home/chefForm/chefMenu" element={<ChefMenu/>}/>
          <Route path="/home/chefForm/userForm" element={<UserForm/>}/>
          <Route path="/home/:id/ChefList/:id/chefProfileFull" element={<ChefProfileFull />} />
        </Routes>
       
      </Router>
      
    </div>
  );
}

export default App;