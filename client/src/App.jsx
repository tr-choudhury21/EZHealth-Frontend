import React , {useContext, useEffect} from "react";
import { Context } from "./auth";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import HomePage from "./pages/Home"
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";
import RegistrationPage from "./pages/Register";
import AboutUsPage from "./pages/About";
import Footer from "./components/Footer";
import DoctorsPage from "./pages/Doctors";
import ServicesPage from "./components/Service";
import AppointmentPage from "./pages/Appointment";
import Loader from "./components/Loader";
import Recommendation from "./components/Recommendation";

function App() {

  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/user/patient/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/doctors" element={<DoctorsPage/>} />
          <Route path="/recommend" element={<Recommendation/>} />
          <Route path="/service" element={<ServicesPage/>} />
          <Route path="/appointment" element={<AppointmentPage/>} />
          <Route path="/login" element={<LoginPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
        <Footer/>
        <ToastContainer position="top-center"/>
      </Router>
    </>
  )
}

export default App
