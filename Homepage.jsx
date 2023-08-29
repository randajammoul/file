import React, {useEffect} from "react"
import Nav from "./Nav";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card1 from "../component/Card1";
import photo1 from "../img/photo1.PNG"
export default ()=>{
    const card=[{
        img:photo1,
        text:"lorem Ipsumee",
    },{
        img:photo1,
        text:"Dolor Sitemaie",
    },{
        img:photo1,
        text:"Nemos Enimad",
    }, {
        img: photo1,
        text: "magni Dolores",
    },]
    useEffect(() => {
        AOS.init();
    }, [])
    return(<>
        <div className="back1 ">
           <Nav/>
           <Row className="mx-0">
               <Col md={4}></Col>
                   <Col md={5} style={{height:"60vh"}} className="d-flex justify-content-center align-items-center">
                       <div data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-duration="1000">
                       <div style={{textAlign:"center"}}>
                           <div  style={{fontWeight:"750",fontSize:"50px",color:"black"}}>
                               Powerful Digital Solutions With Gp
                           </div>
                           <h4 style={{color:"white",fontsize:"20px"}}>
                               We are team of talented digital marketers
                           </h4>
                       </div>
                       </div>
                   </Col>
               <Col md={3}></Col>
           </Row>
            <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
                    <div className="row mx-0">
                        {
                            card.map((e)=>{
                                return(<>
                                    <div className="col-md-3">
                                        <Card1 img={e.img} text={e.text}/>
                                    </div>
                                </>)
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
        </>)
}