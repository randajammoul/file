import React from "react"
import 'bootstrap/dist/js/bootstrap.min.js';
export default ()=>{
    return(<>
               <div className="navbar navbar-expand-md bg-dark navbar-dark">
                   <div className="container">
                       <a href="#" className="navbar-brand fw-bold" style={{fontSize:"35px",letterSpacing:"3px"}}>Gp<span style={{color:"#ffc451"}}>.</span></a>
                       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                           <span className="navbar-toggler-icon"></span></button>
                       <div className="collapse navbar-collapse" id="mainmenu">
                           <ul className="navbar-nav ms-auto">
                               <li className="nav-item li-nav "><a href="#about" className="nav-link">Home</a></li>
                               <li className="nav-item li-nav "><a href="#about" className="nav-link">About</a></li>
                               <li className="nav-item li-nav "><a href="#about" className="nav-link">service</a></li>
                               <li className="nav-item"><a href="#project" className="nav-link">Portfolio</a></li>
                               <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                           </ul>
                           <button className="btn btn-outline-warning text-white m-1">
                               Get-start
                           </button>
                       </div>
                   </div>
               </div>
        </>)
}