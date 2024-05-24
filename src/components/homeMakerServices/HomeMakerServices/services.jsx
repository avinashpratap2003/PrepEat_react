import React from "react";
import './services.css';
import HomeMakerIcon1 from '../../../assets/homeMakerService/homeMakerIcon1.png'
import HomeMakerIcon2 from '../../../assets/homeMakerService/homeMakerIcon2.png'
import HomeMakerIcon3 from '../../../assets/homeMakerService/homeMakerIcon3.png'
import HomeMakerIcon4 from '../../../assets/homeMakerService/homeMakerIcon4.png'
import HomeMakerIcon5 from '../../../assets/homeMakerService/homeMakerIcon5.png'
import HomeMakerIcon6 from '../../../assets/homeMakerService/homeMakerIcon6.png'
import HomeMakerImg2 from '../../../assets/homeMakerService/homeMakerImg2.png'
import HomeMakerImg3 from '../../../assets/homeMakerService/homeMakerImg3.png'
const HomeServices=()=>{
    return(
        <div className="homeServicesContainer">
            <div className="homeServicesInnerContainer">
                <div className="homeServicesIcons">
                    <div className="serviceHeading">
                        <p>OUR SERVICES</p>
                    </div>
                    <div className="homeServicesCards">
                        <div className="homeServicesCard">
                            <div className="homeServiceCardImg">
                                <img src={HomeMakerIcon1} alt="" />
                            </div>
                            <div className="serviceCardName">
                                <p>Errands</p>
                            </div>
                            <div className="serviceCardPara">
                                <p> Running errands including school drop-offs, dry cleaning pickup/delivery, and bill payments.</p>
                            </div>
                        </div>
                        <div className="homeServicesCard">
                            <div className="homeServiceCardImg">
                                <img src={HomeMakerIcon2} alt="" />
                            </div>
                            <div className="serviceCardName">
                                <p>Errands</p>
                            </div>
                            <div className="serviceCardPara">
                                <p> Vacuuming, dusting, mopping, bathroom and kitchen cleaning, bed-making.</p>
                            </div>
                        </div>
                        <div className="homeServicesCard">
                            <div className="homeServiceCardImg">
                                <img src={HomeMakerIcon3} alt="" />
                            </div>
                            <div className="serviceCardName">
                                <p>Errands</p>
                            </div>
                            <div className="serviceCardPara">
                                <p>  Cooking, serving meals, dishwashing, and kitchen cleanup.</p>
                            </div>
                        </div>
                        <div className="homeServicesCard">
                            <div className="homeServiceCardImg">
                                <img src={HomeMakerIcon4} alt="" />
                            </div>
                            <div className="serviceCardName">
                                <p>Errands</p>
                            </div>
                            <div className="serviceCardPara">
                                <p> Caring for lawns and gardens.</p>
                            </div>
                        </div>
                        <div className="homeServicesCard">
                            <div className="homeServiceCardImg">
                                <img src={HomeMakerIcon5} alt="" />
                            </div>
                            <div className="serviceCardName">
                                <p>Errands</p>
                            </div>
                            <div className="serviceCardPara">
                                <p>Shopping for food and household supplies.</p>
                            </div>
                        </div>
                        <div className="homeServicesCard">
                            <div className="homeServiceCardImg">
                                <img src={HomeMakerIcon6} alt="" />
                            </div>
                            <div className="serviceCardName">
                                <p>Errands</p>
                            </div>
                            <div className="serviceCardPara">
                                <p>Watching over homes while owners are away</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="homeServiceDetails">
                    <div className="homeServiceDetailsHeadingResp">
                        <p>ABOUT US</p>
                    </div>
                <div className="homeServiceDetailsLeft1">
                    <img src={HomeMakerImg2} alt="" />
                </div>
                <div className="homeServiceDetailsRight">
                    <div className="homeServiceDetailsHeading">
                        <p>ABOUT US</p>
                    </div>
                    <div className="homeServiceDetailsPara">
                        <p>"PrepEat's Homemaker Service is your partner in creating a serene and well-organized home environment. Our skilled homemakers handle a range of tasks, from laundry and cleaning to meal preparation, all customized to your preferences. We understand that every home is unique, which is why we work closely with you to tailor our services to your specific needs.</p>
                    </div>
                </div>
            </div>
            <div className="homeServiceDetails">
                    <div className="homeServiceDetailsHeadingResp">
                        <p>WHY CHOOSE US ?</p>
                    </div>
                <div className="homeServiceDetailsLeft2">
                    <img src={HomeMakerImg3} alt="" />
                </div>
                <div className="homeServiceDetailsRight">
                    <div className="homeServiceDetailsHeading">
                        <p>WHY CHOOSE US ?</p>
                    </div>
                    <div className="homeServiceDetailsPara">
                        <p>Choose PrepEat’s homemaker service for a well-rounded, personalized and hassle-free homecare experience.</p>
                        <ul>
                            <li>comprehensive homecare</li>
                            <li>Expertise in every task</li>
                            <li>customized care</li>
                            <li>Time and Convenience</li>
                            <li>Reliability</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeServices