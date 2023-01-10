import './App.css';
import Footer from './Components/HomePage/Footer';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from './Components/HomePage/Header'
import MainSection from './Components/HomePage/MainSection';
function App() {
  return (
    <div className="App">
        <Header />
        <MainSection/>
      
      <Router>
        <Routes>
        </Routes>
        <Footer/>
      </Router>
 
    </div>
  );
}

export default App;
