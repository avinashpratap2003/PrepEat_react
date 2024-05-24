import React from "react";
import './upcoming.css';
import upcomingImg1 from '../../../assets/chefService/upcomingOccasion1.png'
import upcomingImg2 from '../../../assets/chefService/upcomingOccasion2.png'
import upcomingImg3 from '../../../assets/chefService/upcomingOccasion3.png'
const Upcoming=()=>{
    return(
        <div className="upcomingContainer">
            <div className="upcomingInnerContainer">
                <div className="upcomingHeading">
                    <Flip top><h4>Upcoming occasions</h4></Flip>
                </div>
                <div className="upcomingCards">
                    <div className="upcomingCard">
                        <div className="upcomingImg">
                            <Flip top><img src={upcomingImg1} alt="" /></Flip>
                        </div>
                        <div className="upcomingText">
                            <Flip top><p>Navratri</p></Flip>
                        </div>
                    </div>
                    <div className="upcomingCard">
                        <div className="upcomingImg">
                            <Flip top><img src={upcomingImg2} alt="" /></Flip>
                        </div>
                        <div className="upcomingText">
                            <Flip top><p>Dandiya Night</p></Flip>
                        </div>
                    </div>
                    <div className="upcomingCard">
                        <div className="upcomingImg">
                            <Flip top><img src={upcomingImg3} alt="" /></Flip>
                        </div>
                        <div className="upcomingText">
                            <Flip top><p>Durga Puja</p></Flip>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Upcoming;