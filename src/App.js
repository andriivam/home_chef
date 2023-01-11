import './App.css';
import Footer from './Components/HomePage/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/HomePage/Header'
import MainSection from './Components/HomePage/MainSection';
import ChefList from './Components/Menu/ChefList';
// import Logo from './Components/Logo/Logo';
function App() {
  return (
    <div className="App">
      <Router>
      {/* <Logo/> */}
        <Header />
        <Routes>
          <Route path="/mainSection" element={<MainSection/>} />
          <Route path="/mainSection/:ChefList" element={<ChefList/>} />
        </Routes>
        <Footer/>
      </Router>
 
    </div>
  );
}

export default App;
