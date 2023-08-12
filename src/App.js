import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from "./Pages/Main";
import Transactions from "./Pages/Transactions"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/Transactions" element={<Transactions />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
