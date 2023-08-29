import React from "react"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default ()=>{
    return(<>
         <div className="row mt-5 mx-0 back-foot text-white">
             <div className="col-md-3 d-flex justify-content-center align-items-center">
             <div>
                 <div style={{fontSize:"25px"}} >GP <span style={{color:"#ffc451"}}>.</span></div>
                 <div className="mt-3">A108 Adam Street</div>
                 <div className="mt-3">NY 535022, USA</div>
                 <div className="mt-3">Phone: +1 5589 55488 55</div>
                 <div className="mt-3">Email: info@example.com</div>
                 <div className="mt-2">
                      <span className="px-2">
                       <TwitterIcon/>
                     </span>
                     <span className="px-2">
                       <FacebookIcon/>
                     </span>
                     <span className="px-2">
                       <InstagramIcon/>
                     </span>
                     <span className="px-2">
                       <TelegramIcon/>
                     </span>
                     <span className="px-1">
                       <LinkedInIcon/>
                     </span>
                 </div>
             </div>
             </div>
             <div className="col-md-3 d-flex justify-content-center align-items-center">
                 <div className="mt-5 p-3">
                     <div style={{fontSize:"25px"}} >Useful Links</div>
                    <ul>
                        <li className="li-about">home</li>
                        <li className="li-about" >About us</li>
                        <li className="li-about">Services</li>
                        <li className="li-about">Terms of service</li>
                        <li className="li-about">Privacy policy</li>
                    </ul>
                 </div>
             </div>
             <div className="col-md-3 d-flex justify-content-center align-items-center">
                 <div className="mt-5 p-3">
                     <div style={{fontSize:"25px"}} >Our Services</div>
                     <ul>
                         <li className="li-about"> Web Design</li>
                         <li className="li-about" >Web Development</li>
                         <li className="li-about">Product Management</li>
                         <li className="li-about"> Marketing</li>
                         <li className="li-about">Graphic Design</li>
                     </ul>
                 </div>
             </div>
             <div className="col-md-3 d-flex justify-content-center">
                 <div className="p-3">
                     <div style={{fontSize:"25px",marginTop:"45px"}} >Our Newsletter</div>
                      <div className="mt-2">
                          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                      </div>
                     <div className="mt-3">
                         <input style={{backgroundColor:"white",width:"200px"}}/>
                         <button style={{background:"#ffc451",marginTop:"0.5px"}}>
                             Submit
                         </button>
                     </div>
                 </div>
             </div>
         </div>
        <div className="bg-dark d-flex justify-content-center justify-content-center">
             <div>
                 <div className="text-white text-center mt-2">© Copyright Gp. All Rights Reserved</div>
                 <div className="text-white text-center mt-1">Designed by <span className="text-warning">BootstrapMade</span></div>
             </div>
        </div>
      </>)
}