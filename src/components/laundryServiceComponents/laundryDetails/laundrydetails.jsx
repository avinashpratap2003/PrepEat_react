import React from "react";
import './laundrydetails.css'
import Fade from 'react-reveal/Fade';
import laundryImg1 from '../../../assets/laundryService/laundryImg1.png'
import laundryImg2 from '../../../assets/laundryService/laundryImg2.png'
import laundryImg3 from '../../../assets/laundryService/laundryImg3.png'
import laundryVector from '../../../assets/laundryService/laundryVector.png'
import Verified from '../../../assets/laundryService/verified.png'
const Laundrydetails=()=>{
    return(
        <div className="laundrydetailsContainer">
            <div className="laundrydetailsInnerContainer">
                <div className="laundrydetailsCards">
                    <div className="laundryVector">
                        <img src={laundryVector} alt="" />
                    </div>
                    <div className="laundrydetailscard">
                        <div className="laundrydetailsResponsive">
                            <p>ABOUT US</p>
                        </div>
                        <div className="laundrydetailsImg">
                            <img className="laundryImg1" src={laundryImg1} alt="" />
                        </div>
                        <div className="laundrydetailsText">
                            <div className="laundrydetailsHeading">
                                <Fade right>
                                    <p>ABOUT US</p>
                                </Fade>
                            </div>
                            <div className="laundrydetailsPara">
                                <Fade right>
                                    <p>PrepEat's Laundry Service is your trusted partner for hassle-free laundry care. With a focus on quality and convenience, we handle your clothes with precision and care, delivering spotlessly clean and fresh results. Our team's dedication means you can reclaim your time while we take care of the laundry grind. </p>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="laundrydetailsCards">
                    <img className="laundryVector" src={laundryVector} alt="" />
                    <div className="laundrydetailscard">
                        <div className="laundrydetailsResponsive">
                            <p>OUR QUALITY ASSURANCE</p>
                        </div>
                         <div className="laundrydetailsText">
                            <div className="laundrydetailsImg">
                                <img className="laundryImg2Responsive" src={laundryImg2} alt="" />
                            </div>
                            <div className="laundrydetailsHeading">
                                <Fade left>
                                    <p>OUR QUALITY ASSURANCE</p>
                                </Fade>
                            </div>
                            <Fade left>
                                <div className="laundrydetailsPara">
                                    <p>At PrepEat, we take the utmost pride in delivering laundry services that meet the highest standards of quality and care. </p>
                                </div>
                                <div className="verifiedContainer">
                                    <div className="verify1">
                                        <div className="verifyImg">
                                            <img src={Verified} alt="" />
                                        </div>
                                        <div className="verifyText">
                                            <p>Quality Control</p>
                                        </div>
                                    </div>
                                    <div className="verify1">
                                        <div className="verifyImg">
                                            <img src={Verified} alt="" />
                                        </div>
                                        <div className="verifyText">
                                            <p>Advanced Technology</p>
                                        </div>
                                    </div>
                                    <div className="verify1">
                                        <div className="verifyImg">
                                            <img src={Verified} alt="" />
                                        </div>
                                        <div className="verifyText">
                                            <p>Expert Handling</p>
                                        </div>
                                    </div>
                                    <div className="verify1">
                                        <div className="verifyImg">
                                            <img src={Verified} alt="" />
                                        </div>
                                        <div className="verifyText">
                                            <p>Timely Service</p>
                                        </div>
                                    </div>
                                    <div className="verify1">
                                        <div className="verifyImg">
                                            <img src={Verified} alt="" />
                                        </div>
                                        <div className="verifyText">
                                            <p>stain Removal</p>
                                        </div>
                                    </div>
                                    <div className="verify1">
                                        <div className="verifyImg">
                                            <img src={Verified} alt="" />
                                        </div>
                                        <div className="verifyText">
                                            <p>Customer Satisfaction</p>
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                        <div className="laundrydetailsImg">
                            <img className="laundryImg2" src={laundryImg2} alt="" />
                        </div>
                    </div>
                </div>
                <div className="laundrydetailsCards">
                    <img className="laundryVector" src={laundryVector} alt="" />
                    <div className="laundrydetailscard">
                        <div className="laundrydetailsResponsive">
                            <p>WHY CHOOSE US?</p>
                        </div>
                        <div className="laundrydetailsImg">
                            <img className="laundryImg3" src={laundryImg3} alt="" />
                        </div>
                        <div className="laundrydetailsText">
                        <Fade right>
                            <div className="laundrydetailsHeading">
                                <p>WHY CHOOSE US?</p>
                            </div>
                            <div className="laundrydetailsPara">
                                <p>Choose PrepEat for your laundry needs and experience the difference. We don’t just clean clothes; we elevate your laundry experience.</p>
                                <ul>
                                    <li>Exceptional Quality </li>
                                    <li>Convenience Redefined</li>
                                    <li>Care for your Garments</li>
                                    <li>Transparent Pricing</li>
                                    <li>Customer-Centric Approach</li>
                                </ul>
                            </div>
                        </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Laundrydetails