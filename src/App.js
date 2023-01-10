import './App.css';
import Footer from './Components /HomePage/Footer';
import ChefList from './Components /Menu/ChefList';
import {BrowserRouter as Router, Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <ChefList/>
      <Router>
        <Routes>
        </Routes>
        <Footer/>
      </Router>
 
    </div>
  );
}

export default App;
