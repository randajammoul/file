import React, {useEffect} from "react"
import about from "../img/about.jpg"
import about1 from "../img/features.jpg"
import about11 from"../img/about1.PNG"
import about12 from"../img/about2.PNG"
import about13 from"../img/about3.PNG"
import about14 from"../img/about4.PNG"
import Splide from "../component/Splide";
import AOS from 'aos';
import 'aos/dist/aos.css';
export default ()=>{
    useEffect(() => {
        AOS.init();
    }, [])

    return(<>
        <div className="row mt-5 mx-0">
          <div className="col-md-6 d-flex justify-content-center align-items-center">
              <div style={{padding:"15px"}}>
                  <h2>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h2>
                  <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <ul>
                      <li className="li-about">Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                      <li className="li-about">Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                      <li className="li-about">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                  </ul>
                  <p>
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
                  </p>
              </div>
          </div>
          <div className="col-md-6">
             <img style={{width:"600px",height:"500px"}}  className="img-fluid" src={about} alt="photo"/>
          </div>
        </div>
        <Splide/>
        <div className="row mx-0">
            <div className="col-md-1"></div>
            <div className="col-md-5">
                <div data-aos="fade-right"
                     data-aos-offset="300"
                     data-aos-easing="ease-in-sine">
               <img style={{width:"500px"}} src={about1} alt="photo"/>
                </div>
             </div>
             <div className="col-md-5">
                 <div data-aos="fade-left"
                      data-aos-offset="300"
                      data-aos-easing="ease-in-sine">
                     <div className="mt-2">
                         <span className="mt-1 m-3"><img src={about11}/>
                         <span style={{fontSize:"26px",fontWeight:400}}>
                             Est labore ad
                         </span>
                         </span>
                         <div className="px-3">
                             Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip
                         </div>
                     </div>
                     <div className="mt-2">
                         <span className="mt-1 m-3"><img src={about12}/>
                         <span style={{fontSize:"26px",fontWeight:400}}>
                             Harum esse qui
                         </span>
                         </span>
                         <div className="px-3">
                             Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                         </div>
                     </div>
                     <div className="mt-2">
                         <span className="mt-1 m-3"><img src={about13}/>
                         <span style={{fontSize:"26px",fontWeight:400}}>
                          Aut occaecati
                         </span>
                         </span>
                         <div className="px-3">
                             Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere
                         </div>
                     </div>

                     <div className="mt-2">
                         <span className="mt-1 m-3"><img src={about14}/>
                         <span style={{fontSize:"26px",fontWeight:400}}>
                            Aut occaecati
                         </span>
                         </span>
                         <div className="mx-3">
                             Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta
                         </div>
                     </div>
                 </div>
             </div>
         </div>
        </>)
}