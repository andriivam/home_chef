import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import ChefList from './Components/Menu/ChefList';
import Logo from './Components/Logo/Logo';
import Menu from './Components/MenuPage/Menu';
<<<<<<< HEAD
import ChefProfile from './Components/ChefPage/ChefProfile';
import Header from './Components/HomePage/Header';
import Footer from './Components/HomePage/Footer';
import ChefMenu from './Components/ChefPage/ChefMenu'
import ChefItem from './Components/Menu/ChefItem';
=======
// import ChefMenu from './Components/ChefPage/ChefMenu';
// import ChefProfile from './Components/ChefPage/ChefProfile';

>>>>>>> d651c338b744c9b91e8cc824e1ce09471b51e991

function App() {

  return (
    <div className="App">
<<<<<<< HEAD
      <Header/>
      <ChefProfile/> 
      <ChefMenu/>
      
     
      
     

=======
      {/* {<ChefProfile/>}
      {<ChefMenu/>} */}
>>>>>>> d651c338b744c9b91e8cc824e1ce09471b51e991
      <Router>
        <Routes>
          {/* <Route path="/" element={<Logo/>}/>
          <Route path="/home" element={<HomePage/>} />
<<<<<<< HEAD
          <Route path="/home/:ChefList" element={<ChefList />} />
          <Route path="/home/Menu" element={<Menu/>}/> */}
=======
          <Route path="/home/Menu" element={<Menu/>}/>
          <Route path="/home/:id/ChefList" element={<ChefList/>} />
>>>>>>> d651c338b744c9b91e8cc824e1ce09471b51e991
        </Routes>
       
      </Router>
      
    </div>
  );
}

export default App;
