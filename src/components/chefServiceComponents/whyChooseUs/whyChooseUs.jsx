import React from "react";
import './whyChooseUs.css'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import LightSpeed from 'react-reveal/LightSpeed';
import whychooseus from '../../../assets/chefService/whyChooseUs.png'
import wcu1 from '../../../assets/chefService/wcu1.png'
import wcu2 from '../../../assets/chefService/wcu2.png'
import wcu3 from '../../../assets/chefService/wcu3.png'
import wcu4 from '../../../assets/chefService/wcu4.png'
const Chooseus=()=>{
    return(
        <div className="chooseusContainer">
            <div className="chooseusInnerContainer">
                <div className="chooseusHeading">
                    <Slide top><p>WHY <span>CHOOSE</span>  US ?</p></Slide>
                </div>
                <div className="chooseusContent">
                    <div className="chooseusContentLeft">
                        <img src={whychooseus} alt="" />
                    </div>
                    <div className="chooseusContentRight">
                        <p>Ourchefs have possess several key qualities and characteristics :</p>
                        <LightSpeed right>
                        <ul>
                            <li>Hygiene and Food Safety</li>
                            <li>Client-Centric Approach</li>
                            <li>Communication Skills</li>
                            <li>Time Management</li>
                            <li>Professionalism</li>
                            <li>Passion</li>
                        </ul>
                        </LightSpeed>
                    </div>
                </div>
                <div className="chooseusbottom">
                    <div className="chooseusbottomCards">
                        <div className="chooseusbottomResp">
                            <Fade left>
                            <div className="chooseusbottomCard">
                                <img src={wcu1} alt="" />
                                <h4>Easiest way to book</h4>
                                <p>You just need to go online and book your favorite menu and chefs.  </p>
                            </div>
                            <div className="chooseusbottomCard">
                                <img src={wcu2} alt="" />
                                <h4>Quality & Freshness</h4>
                                <p>Our chefs buy the finest ingredients</p>
                            </div>
                            </Fade>
                        </div>
                        <div className="chooseusbottomResp">
                            <Fade right>
                            <div className="chooseusbottomCard">
                                <img src={wcu3} alt="" />
                                <h4>Full white glove service</h4>
                                <p>The chef will do the cook, serve and clean after the meal.</p>
                            </div>
                            <div className="chooseusbottomCard">
                                <img src={wcu4} alt="" />
                                <h4>Full white glove service</h4>
                                <p>Our customers provide Public feedback about the service of the chef</p>
                            </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chooseus;