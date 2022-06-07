import React from 'react'
import '../src/styles/App.css';
import NavBar from './components/NavBar';
import {Routes,Route} from 'react-router-dom';
import Index from './pages/index.jsx'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />}/>
      </Routes>
    </div>
  );
}

export default App;
