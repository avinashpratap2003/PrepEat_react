import React from "react";
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import './booknow.css'
import laundryDelivery from '../../../assets/laundryService/laundryDelivery.png'
import hirehomemaker from '../../../assets/laundryService/hireHomemaker.png'
const LaundrybookNow=()=>{
    return(
        <div className="booknowContainer">
            <div className="booknowInnerContainer">
                <div className="booknowInputs">
                    <div className="inputHeading">
                        <p>Free Pickup & Delivery</p>
                    </div>
                    <div className="inputfields">
                        <p>Full name</p>
                        <input type="text" />
                        <p>Mobile Number</p>
                        <input type="text" />
                        <p>Full Address</p>
                        <input type="text" />
                    </div>
                    <div className="bookbtn">
                        <button>Book now</button>
                    </div>
                </div>
                <div className="booknowImg">
                    <img src={laundryDelivery} alt="" />
                </div>
            </div>
            <div className="hireResponsive">
            <div className="hireHomemaker">
                <div className="hireHomemakerHeadingResp">
                    <Fade top>
                        <p>Want to hire a homemaker ?</p>
                    </Fade>
                </div>
                <div className="hireHomemakerImg">
                    <img src={hirehomemaker} alt="" />
                </div>
                <div className="hireHomemakerText">
                    <div className="hireHomemakerHeading">
                    <Fade top>
                        <p>Want to hire a homemaker ?</p>
                    </Fade>
                    </div>
                    <div className="hireHomemakerPara">
                        <p>"Experience a new level of convenience with PrepEat's Laundry and Homemaker Services. Our Laundry Service ensures your clothes are spotlessly clean and fresh, while our Homemaker Service transforms your home into an oasis of order. Our homemakers are skilled in tasks ranging from laundry folding to vacuuming, allowing you to return to a home that's both immaculate and comfortable. With customization at the heart of our approach, we adapt our services to your preferences. </p>
                    </div>
                    <div className="hireHomemakerBtn">
                        <Flip top>
                        <button className="btn3">Know more</button>
                        <button className="btn4">Book now</button>
                        </Flip>
                    </div>

                </div>
            </div>
            </div>
        </div>
    )
}


export default LaundrybookNow;