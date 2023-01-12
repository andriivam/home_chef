import './App.css';
import Footer from './Components/HomePage/Footer';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
import Header from './Components/HomePage/Header'
import MainSection from './Components/HomePage/MainSection';
import UserForm from './Components/UserForm/UserForm';

function App() {
  return (
    <div className="App">
        <Header />
        <MainSection/>
      
      <Router>
        <Routes>
        </Routes>
        <Footer/>
        <Header />
        <UserForm />
        <Footer/>
      </Router>
 
    </div>
  );
}

export default App;
