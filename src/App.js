import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import HomePage from './Components/HomePage/HomePage';
// import ChefList from './Components/Menu/ChefList';
// import Logo from './Components/Logo/Logo';
import ChefForm from './Components/UserChef/ChefForm'
function App() {
  return (
    <div className="App">
      <Router>
        {/* <Routes>
          <Route path="/" element={<Logo/>}/>
          <Route path="/home" element={<HomePage/>} />
          <Route path="/home/:ChefList" element={<ChefList />} />
          
        </Routes> */}
        <ChefForm />
      </Router>
      
    </div>
  );
}

export default App;
