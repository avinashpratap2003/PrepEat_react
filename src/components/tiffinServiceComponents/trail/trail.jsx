import React,{useState} from "react";
import './trail.css'
import Roll from 'react-reveal/Roll';
import Tilt from 'react-parallax-tilt'
import PlateImg from '../../../assets/tiffinServices/plate.png'
import {BiRupee} from 'react-icons/bi'
const Trails=()=>{
    const [scale] = useState(1.2);
    return(
        <div className="trailsContainer">
            <div className="trailsInnerContainer">
            <Tilt className="trailsTiltCard" tiltEnable={false} scale={scale} transitionSpeed={2500}>
                <Roll left>
                <div className="card">
                        <div className="trailcardImg">
                            <img src={PlateImg} alt="" />
                        </div>
                        <div className="cardHeading">
                            <span>15 Days Trail</span>
                            <p>Breakfast / Lunch / Dinner</p>
                        </div>
                        <div className="price">
                            <div className="numberofdays">
                                <p>15 Days Trial</p>
                            </div>
                            <div className="amount">
                                <div className="finalAmount">
                                    <BiRupee color="#FC501A" style={{ fontSize: '25px' }}/><span>1,050</span>
                                </div>
                                <div className="discount">
                                     <BiRupee /><span><del>2,400</del></span>
                                </div>
                                <div className="pay">
                                     <button>PAY</button>
                                 </div>
                            </div>
                        </div>
                </div>
                </Roll>
            </Tilt>
            <Tilt className="trailsTiltCard" tiltEnable={false} scale={scale} transitionSpeed={2500}>
                <Roll bottom>
                <div className="card">
                        <div className="trailcardImg">
                            <img src={PlateImg} alt="" />
                        </div>
                        <div className="cardHeading">
                            <span>One Month Meal</span>
                            <p>Breakfast + Lunch + Dinner (3X/Day)</p>
                        </div>
                        <div className="price">
                            <div className="numberofdays">
                                <p>30 Days</p>
                            </div>
                            <div className="amount">
                                <div className="finalAmount">
                                    <BiRupee color="#FC501A" style={{ fontSize: '20px' }}/><span>6,300</span>
                                </div>
                                <div className="discount">
                                     <BiRupee /><span><del>14,400</del></span>
                                </div>
                                <div className="pay">
                                     <button>PAY</button>
                                 </div>
                            </div>
                        </div>
                </div>
                </Roll>
            </Tilt>
            <Tilt className="trailsTiltCard" tiltEnable={false} scale={scale} transitionSpeed={2500}>
                <Roll right>
                <div className="card">
                        <div className="trailcardImg">
                            <img src={PlateImg} alt="" />
                        </div>
                        <div className="cardHeading">
                            <span>Custom</span>
                            <p>(__Times/Day)</p>
                        </div>
                        <div className="price">
                            <div className="numberofdays">
                                <p>___ Days</p>
                            </div>
                            <div className="amount">
                                <div className="finalAmount">
                                    <BiRupee color="#FC501A" style={{ fontSize: '25px' }}/><span>____</span>
                                </div>
                                <div className="discount">
                                     <BiRupee /><span><del>___</del></span>
                                </div>
                                <div className="pay">
                                     <button>PAY</button>
                                 </div>
                            </div>
                        </div>
                </div>
                </Roll>
            </Tilt>
            </div>
        </div>
    )
}

export default Trails;