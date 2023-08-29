import React from "react";
import team1 from "../img/team-1.jpg"
import team2 from "../img/team-2.jpg"
import team3 from "../img/team-3.jpg"
import team4 from "../img/team-4.jpg"
import CardTeam from "../component/CardTeam";
export default ()=>{
    const team=[{
        img:team1,
        name:"Walter White",
        text:"Chief Executive Officer"
    },{
        img:team2,
        name:"Sarah Jhonson",
        text:"Product Manager"
    },{
        img:team3,
        name:"William Anderson",
        text:"CTO"
    },{
        img:team4,
        name:"Amanda Jepson",
        text:"Accountant"
    }]
    return(<>
        <div className="row mx-0">
            <div className="col-md-4">
                <div className="d-flex justify-content-center align-items-center" style={{color:"gray",fontSize:"15px",}}>
                    TEAM&nbsp;
                    <hr style={{width:"200px",height:"0.5vh",backgroundColor:"yellow",}}>
                    </hr>
                </div>
                <h3 style={{textAlign:"center"}}>
                    CHECK OUR TEAM
                </h3>
            </div>
            <div className="col-4"></div>
            <div className="col-4"></div>
        </div>
        <div className="row mx-0">
            {
                team.map((e)=>{
                    return(<>
                        <div className="col-md-3 text-center">
                          <CardTeam img={e.img} name={e.name} text={e.text}/>
                        </div>
                    </>)
                })
            }
        </div>
          </>)
}