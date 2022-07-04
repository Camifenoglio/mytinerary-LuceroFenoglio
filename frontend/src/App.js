import React, { useEffect } from 'react'
import '../src/styles/App.css';
import NavBar from './components/NavBar';
import { Routes, Route } from 'react-router-dom';
import Index from './pages/Index.jsx';
import Footer from './components/Footer'
import Cities from './pages/Cities';
import NotFound from './pages/NotFound';
import ScrollToTop from "react-scroll-to-top";
import FlightIcon from '@mui/icons-material/Flight';
import CardDetails from './components/Details';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import citiesActions from './redux/actions/citiesAction';
import { useDispatch } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import userAction from './redux/actions/userAction';
import { useSelector } from 'react-redux';

function App() {

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0)
    }, 500)
  }, [])

  const dispatch = useDispatch()
  const user = useSelector(store => store.usersReducer.user)


  useEffect(() => {
    dispatch(citiesActions.getCities())
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem("token")
      dispatch(userAction.verifyToken(token))
    }
    // eslint-disable-next-line 
  }, [])

  return (
    <div className="App">
      <Toaster
        toastOptions={{
          className: '',
          style: {
            boxShadow: "0px 3px 10px rgba(8, 8, 8, 0.413)",
            padding: '8px',
            color: 'black',
            textAlign: "center",
            fontSize: "13px",
          },
        }} />
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<Index />} />
        <Route path="/Cities" element={<Cities />} />
        <Route path="/*" element={<NotFound />} />
        <Route path='/details/:id' element={<CardDetails />} />
        {!user && <Route path='/login' element={<LogIn />} /> }
        {!user && <Route path='/signup' element={<SignUp />} />}
      </Routes>
      <Footer />
      <ScrollToTop smooth style={{ backgroundColor: "transparent", width: "3rem", height: "3rem" }} component={<FlightIcon sx={{ color: "yellow", filter: "drop-shadow(3px 8px 2px rgb(0 0 0 / 0.9))", fontSize: "2.7rem" }} />} />
    </div>
  );
}


export default App;
