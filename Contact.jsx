import React from "react";
import photo from "../img/location.PNG"
import contact1 from "../img/contact1.PNG"
import contact2 from "../img/contact2.PNG"
import contact3 from "../img/contact3.PNG"
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";

export default ()=>{
    return(<>
        <div className="row mx-0 mt-5">
            <div className="col-md-4">
                <div className="d-flex justify-content-center align-items-center" style={{color:"gray",fontSize:"15px",}}>
                    Contact&nbsp;
                    <hr style={{width:"200px",height:"0.8vh",backgroundColor:"yellow",}}>
                    </hr>
                </div>
                <h3 style={{textAlign:"center",fontSize:"bold"}}>
                    CONTACT US
                </h3>
            </div>
            <div className="col-4"></div>
            <div className="col-4"></div>
        </div>
        <div className="row mx-0">
            <div className="col-1"></div>
           <div className="col-lg-10">
           <img src={photo} alt="photo"/>
           </div>
            <div className="col-1"></div>
        </div>
        <div className="row mt-5 mx-0">
           <div className="col-1"></div>
            <div className="col-md-4">
             <img className="mx-2" src={contact1} alt="photo"/>
                <span style={{fontSize:"22px",fontWeight:"bold"}}>
                    Location:
                </span>
                <div className="mx-3">
                    A108 Adam Street, New York, NY 535022
                </div>
                <img className="mx-2" src={contact2} alt="photo"/>
                <span style={{fontSize:"22px",fontWeight:"bold"}}>
                   Email:
                </span>
                <div className="mx-3">
                    info@example.com
                </div>
                <img className="mx-2" src={contact3} alt="photo"/>
                <span style={{fontSize:"22px",fontWeight:"bold"}}>
                 Call:
                </span>
                <div className="mx-3">
                    +1 5589 55488 55s
                </div>
            </div>
            <div className="col-md-6">
                <TextField sx={{marginTop:"0.9px",padding:"3px",width:"100%"}} id="outlined-basic" label="Your name" variant="outlined" />
                <TextField sx={{marginTop:"0.9px",padding:"3px",width:"100%"}}  id="outlined-basic" label="Your email" variant="outlined" />
                <TextField sx={{marginTop:"0.9px",padding:"3px",width:"100%"}} id="outlined-basic" label="subject" variant="outlined" />
                <TextField sx={{marginTop:"0.9px",padding:"3px",width:"100%"}}  id="outlined-basic" label="message" variant="outlined" />
                <div style={{display:"flex",marginTop:"12PX"}}>
                    <Button style={{margin:"auto",backgroundColor:"#ffc451",color:"black"}}>
                        Send Message
                    </Button>
                </div>
            </div>
        </div>
    </>)
}