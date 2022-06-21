import React, { useEffect } from 'react'
import '../src/styles/App.css';
import NavBar from './components/NavBar';
import {Routes,Route} from 'react-router-dom';
import Index from './pages/Index.jsx';
import Footer from './components/Footer'
import Cities from './pages/Cities';
import NotFound from './pages/NotFound';
import ScrollToTop from "react-scroll-to-top";
import FlightIcon from '@mui/icons-material/Flight';
import CardDetails from './components/Details';
import {connect} from 'react-redux';
import citiesActions from './redux/actions/citiesAction'


function App(props) {

  useEffect (()=>{
    setTimeout(() => {
    window.scrollTo(0,0)
  },500)
  },[])

  useEffect(() => {
    props.getCities()
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path="/Cities" element = {<Cities />}/>
        <Route path="*" element={<NotFound />} />
        <Route path='/details/:id' element= {<CardDetails/>}/>
      </Routes>
      <Footer />
      <ScrollToTop smooth style={{backgroundColor:"transparent", width: "3rem", height: "3rem"}} component={<FlightIcon sx={{ color: "#6113AC", fontSize: "2.7rem"}} />} />
    </div>
  );
}

const mapDispatchToProps = {
  getCities: citiesActions.getCities,
}


export default connect(null, mapDispatchToProps)(App)
