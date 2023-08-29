import React from 'react';
import {createRoot} from 'react-dom/client';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Service from "./pages/Service";
import Protofile from "./pages/Protofile";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
function APP(){
    return(<>
        <Homepage/>
        <About/>
        <Service/>
        <Protofile/>
        <Team/>
        <Contact/>
        <Footer/>
        </>)
}
createRoot(document.getElementById("root")).render(<APP/>)
reportWebVitals();
