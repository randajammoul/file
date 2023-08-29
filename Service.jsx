import React from "react"
import Card2 from "../component/Card2";
import c21 from "../img/c21.PNG";
import c22 from "../img/c22.PNG";
import c23 from "../img/c23.PNG";
import c24 from "../img/c24.PNG";
import c25 from "../img/c25.PNG";
import c26 from "../img/c26.PNG";
export default ()=>{
        const array=[{
            img:c21,
            title:"Lorem Ipsum",
            text:"Voluptatum deleniti atque corrupti quos dolores et quas molestias ",
        },
            {
                img:c22,
                title:"Sed ut perspiciatis",
                text:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore",
            }, {
                img:c23,
                title:"Magni Dolores",
                text:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia",
            },
            {
                img:c24,
                title:"Nemo Enim",
                text:"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis",
            },{
                img:c25,
                title:"Dele cardo",
                text:"Quis consequatur saepe eligendi voluptatem consequatur dolor",
            },{
                img:c26,
                title:"Divera don",
                text:"Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur",
            },]
    return(<>
        <div className="row mx-0">
           <div className="col-md-4">
               <div className="d-flex justify-content-center align-items-center" style={{color:"gray",fontSize:"15px",}}>
                   SERVICES &nbsp;
                   <hr style={{width:"200px",height:"0.5vh",backgroundColor:"yellow",}}>
                   </hr>
               </div>
               <h3 style={{textAlign:"center"}}>
                   CHECK OUR SERVICES
               </h3>
           </div>
            <div className="col-4"></div>
            <div className="col-4"></div>
        </div>
        <div className="row mx-0">
            {
                array.map((e)=>{
                    return(<>
                        <div className="col-md-4">
                            <Card2 img={e.img} text={e.text} title={e.title}/>
                        </div>
                    </>)
                })
            }
        </div>
        <div className="row mx-0" style={{marginTop:"60px"}}>
            <div className="d-flex justify-content-center align-items-center back-service">
               <div style={{textAlign:"center",padding:"20px"}}>
                   <h2 style={{color:"white",marginTop:"15px"}}>
                       Call To Action
                   </h2>
                   <p className="p-2 text-white">
                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                   </p>
                   <div>
                       <button className="btn btn-outline-warning text-white m-1 p-3 border-white">
                          call To Action
                       </button>
                   </div>
               </div>
          </div>
        </div>
        </>)
}