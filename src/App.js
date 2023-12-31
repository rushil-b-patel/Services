import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import OtpVerification from "./components/OtpVerification";
import AuthState from "./context/AuthState";
import { ToastContainer } from "react-toastify";
import ServiceProvider from "./components/ServiceProvider";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ServiceProviderCard from "./components/ServiceProviderCard";
import Profile from "./Auth0/profile";


function App() {
  return (
    <>
      <AuthState>
        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/Form" element={<Form />}></Route>
          <Route path="/OTPVerification" element={<OtpVerification />}></Route>
          <Route path="/Login" element={< Login/>}></Route>
          <Route path="/Signup" element={< Signup/>}></Route>
          <Route path="/ServiceProvider" element={<ServiceProvider />}></Route>
          <Route path="/ServiceProviderCard" element={<ServiceProviderCard />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
        </Routes>
        <Footer />
      </AuthState>
    </>
  );
}

export default App;
