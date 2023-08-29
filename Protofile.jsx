import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import port1 from "../img/portfolio-1.jpg"
import port2 from "../img/portfolio-2.jpg"
import port3 from "../img/portfolio-3.jpg"
import port4 from "../img/portfolio-4.jpg"
import port5 from "../img/portfolio-5.jpg"
import port6 from "../img/portfolio-6.jpg"
import port7 from "../img/portfolio-7.jpg"
import port8 from "../img/portfolio-8.jpg"
import port9 from "../img/portfolio-9.jpg"
import AddIcon from '@mui/icons-material/Add';
import protofile from "../img/counts-img.jpg"
import pro1 from "../img/pro1.PNG"
import pro2 from "../img/pro2.PNG"
import pro3 from "../img/pro3.PNG"
import pro4 from "../img/pro4.PNG"
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import Count from "../component/Count";
import CardProtofile from "../component/CardProtofile";
import photo1 from "../img/testimonials-1.jpg"
import photo2 from "../img/testimonials-2.jpg"
import photo3 from "../img/testimonials-3.jpg"
import photo4 from "../img/testimonials-4.jpg"
import photo5 from "../img/testimonials-5.jpg"
export default ()=>{
    const array=[{
        img:pro1,
        number:"303",
        title:"Happy Clients consequuntur voluptas nostrum aliquid ipsam architecto ut."
    },{
        img:pro2,
        number:"525",
        title:"Projects adipisci atque cum quia aspernatur totam laudantium et quia dere tan"
    },{
        img:pro3,
        number:"205",
        title:"Years of experience aut commodi quaerat modi aliquam nam ducimus aut voluptate non vel"
    },{
        img:pro4,
        number:"198",
        title:"Awards rerum asperiores dolor alias quo reprehenderit eum et nemo pad der"
    }]
    const card=[{
        image:photo1,
        name:"Soul-GoodMan",
        career:"Coe&Founder",
        description:"Soul-GoodMan Assign arrow function to a variable before exporting as module default Soul GoodMan",
    },{
        image:photo2,
        name:"Sara Willson",
        career:"Desinger",
        description:"Sara Willson Assign arrow function to a variable before exporting as module default Soul GoodMan",
    },{
        image:photo3,
        name:"Jena-karlis",
        career:"store woner",
        description:"store woner Assign arrow function to a variable before exporting as module default Soul GoodMan",
    },{
        image:photo4,
        name:"Matt Brandon",
        career:"Freelancer",
        description:"Matt Brandon Assign arrow function to a variable before exporting as module default Soul GoodMan",
    },{
        image:photo5,
        name:"John-larson",
        career:"Enterprenure",
        description:"John-larson Assign arrow function to a variable before exporting as module default Soul GoodMan",
    }]
    return(<>
        <div className="row mx-0">
            <div className="col-md-4">
                <div className="d-flex justify-content-center align-items-center" style={{color:"gray",fontSize:"15px",}}>
                    PORTFOLIO&nbsp;
                    <hr style={{width:"200px",height:"0.5vh",backgroundColor:"yellow",}}>
                    </hr>
                </div>
                <h3 style={{textAlign:"center"}}>
                    CHECK OUR PORTFOLIO
                </h3>
            </div>
            <div className="col-4"></div>
            <div className="col-4"></div>
        </div>
        <div className="row mx-0">
           <div className="col-md-4"></div>
           <div className="col-md-4 d-flex justify-content-center align-items-center">
               <ul className="ul-protfolo">
                   <li className="li-protfolo">All</li>
                   <li className="li-protfolo">App</li>
                   <li className="li-protfolo">CARD</li>
                   <li className="li-protfolo">WEB</li>
               </ul>
           </div>
           <div className="col-md-4"></div>
        </div>
        <div className="row m-0">
            <div className="col-md-4">
              <div>
                  <img width="95%" src ={port1} alt="photo"/>
                  <div className="div-card" style={{backgroundColor:"#3532327a",width:"390px",height:"60vh",position:"absolute",marginTop:"-400px"}}>
                    <div style={{color:"white",marginTop:"280px",padding:'6px'}}>
                      <h3>APP1</h3>
                      <h5>APP</h5>
                      <span><AddIcon/></span>
                      <span><VerticalAlignBottomIcon/></span>
                    </div>
                  </div>
              </div>
              <div>
                  <img className="mt-1" width="90%" src={port6} alt="photo"/>
                  <div className="div-card" style={{backgroundColor:"#3532327a",width:"382px",height:"88vh",position:"absolute",marginTop:"-574px"}}>
                      <div style={{color:"white",marginTop:"420px",padding:'6px'}}>
                          <h3>APP3</h3>
                          <h5>APP</h5>
                          <span><AddIcon/></span>
                          <span><VerticalAlignBottomIcon/></span>
                      </div>
                  </div>
              </div>
            </div>
                <div className="col-md-4">
                    <div>
                        <img width="95%" src ={port2} alt="photo"/>
                        <div className="div-card" style={{backgroundColor:"#3532327a",width:"410px",height:"41vh",position:"absolute",marginTop:"-270px"}}>
                         <div style={{color:"white",marginTop:"150px",padding:'6px'}}>
                            <h3>Web3</h3>
                            <h5>web</h5>
                            <span><AddIcon/></span>
                            <span><VerticalAlignBottomIcon/></span>
                         </div>
                        </div>
                    </div>
                    <div>
                        <img width="90%" src ={port5} alt="photo"/>
                        <div className="div-card" style={{backgroundColor:"#3532327a",width:"382px",height:"88vh",position:"absolute",marginTop:"-574px"}}>
                            <div style={{color:"white",marginTop:"420px",padding:'6px'}}>
                                <h3>APP3</h3>
                                <h5>APP</h5>
                                <span><AddIcon/></span>
                                <span><VerticalAlignBottomIcon/></span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img width="95%" src ={port9} alt="photo"/>
                        <div className="div-card" style={{backgroundColor:"#3532327a",width:"410px",height:"41vh",position:"absolute",marginTop:"-270px"}}>
                            <div style={{color:"white",marginTop:"150px",padding:'6px'}}>
                                <h3>Web2</h3>
                                <h5>web</h5>
                                <span><AddIcon/></span>
                                <span><VerticalAlignBottomIcon/></span>
                            </div>
                        </div>
                    </div>
                </div>
            <div className="col-md-4">
                <div>
                    <img width="95%" src ={port3} alt="photo"/>
                    <div className="div-card" style={{backgroundColor:"#3532327a",width:"410px",height:"41vh",position:"absolute",marginTop:"-270px"}}>
                        <div style={{color:"white",marginTop:"150px",padding:'6px'}}>
                            <h3>Web3</h3>
                            <h5>web</h5>
                            <span><AddIcon/></span>
                            <span><VerticalAlignBottomIcon/></span>
                        </div>
                    </div>
                </div>
                <div>
                    <img width="90%" src ={port4} alt="photo"/>
                    <div className="div-card" style={{backgroundColor:"#3532327a",width:"410px",height:"41vh",position:"absolute",marginTop:"-270px"}}>
                        <div style={{color:"white",marginTop:"150px",padding:'6px'}}>
                            <h3>Card1</h3>
                            <h5>card</h5>
                            <span><AddIcon/></span>
                            <span><VerticalAlignBottomIcon/></span>
                        </div>
                    </div>
                </div>
                <div>
                    <img width="95%" src ={port7} alt="photo"/>
                    <div className="div-card" style={{backgroundColor:"#3532327a",width:"410px",height:"41vh",position:"absolute",marginTop:"-270px"}}>
                        <div style={{color:"white",marginTop:"150px",padding:'6px'}}>
                            <h3>Card2</h3>
                            <h5>card</h5>
                            <span><AddIcon/></span>
                            <span><VerticalAlignBottomIcon/></span>
                        </div>
                    </div>
                </div>
                <div>
                    <img width="95%" src ={port8} alt="photo"/>
                    <div className="div-card" style={{backgroundColor:"#3532327a",width:"410px",height:"41vh",position:"absolute",marginTop:"-270px"}}>
                        <div style={{color:"white",marginTop:"150px",padding:'6px'}}>
                            <h3>Card3</h3>
                            <h5>card</h5>
                            <span><AddIcon/></span>
                            <span><VerticalAlignBottomIcon/></span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        {/*section2.....//*/}
        <div className="row mt-4 mx-0">
            <div className="col-1"></div>
            <div className="col-md-5">
                <img width="500px" src={protofile} alt="photo"/>
            </div>
            <div className="col-md-6">
              <div className="d-flex justify-content-center align-items-center">
                <div>
                    <h1 className="mt-4 text-center">
                        Voluptatem dignissimos provident quasi
                    </h1>
                    <p className="text-center">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                    </p>
                    <div className="row mx-0">
                                {
                                    array.map((e)=>{
                                        return(<> <div className="col-md-6">
                                                <Count img={e.img} number={e.number} title={e.title}/>
                                              </div>
                                             </>)
                                     })
                                }
                    </div>
                </div>
              </div>
            </div>
        </div>
        <div className="row  mx-0" style={{marginTop:"60px"}}>
            <div className="d-flex justify-content-center align-items-center back-protofile">
            </div>
        </div>
        <div style={{textAlign:"center",padding:"20px",backgroundColor:"#000000a6",width:"100%",height:"60vh",position:"absolute",marginTop:"-392px"}}>
            <Splide options={{ rewind: true,perPage:"1",autoplay:true,type:"loop",interval:"1500",arrows:false,}}>
                {
                    card.map((e) => {
                        return (<>
                            <SplideSlide>
                                <CardProtofile image={e.image} name={e.name} description={e.description} career={e.career}/>
                            </SplideSlide>

                        </>)
                    })
                }
            </Splide>
        </div>
</>)
}