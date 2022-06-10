import React from 'react'
import '../src/styles/App.css';
import NavBar from './components/NavBar';
import {Routes,Route} from 'react-router-dom';
import Index from './pages/Index.jsx';
import Footer from './components/Footer'
import Cities from './pages/Cities';
import NotFound from './pages/NotFound'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/Cities" element = {<Cities />}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
