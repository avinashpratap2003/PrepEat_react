import React from "react";
import './footer.css';
import googleStore from '../../assets/landingPage/appleStore.png'
import appleStore from '../../assets/landingPage/googleStore.png'
import logo from '../../assets/landingPage/logo.png'
import Footerlogo from '../../assets/landingPage/footerLogo.png';
import icon1 from '../../assets/landingPage/Facebook.png'
import icon2 from '../../assets/landingPage/instagram.png'
import icon3 from '../../assets/landingPage/xtwitter.png'
import icon4 from '../../assets/landingPage/youtube.png'

const Footer=()=>{
    return(
        <div className="footerContainer">
            <div className="footerinnerContainer">
                <div className="footerLeft">
                    <h3>QUICK LINKS</h3>
                    <ul>
                        <li><a href=".">FAQ</a></li>
                        <li><a href=".">About Us</a></li>
                        <li><a href=".">Contact Us</a></li>
                        <li><a href=".">Privacy Policy</a></li>
                        <li><a href=".">Pricing</a></li>
                        <li><a href=".">Terms & Conditions</a></li>
                        <li><a href=".">Cancellation and Refund Policy</a></li>
                    </ul>
                </div>
                <div className="footerMiddle">
                    <img src={googleStore} alt="" />
                    <img src={appleStore} alt="" />
                </div>
                <div className="footerright">
                    <h3>REACH US</h3>
                    <ul>
                        <li><a href=".">support@prepeatkitchen.in</a></li>
                        <li><a href=".">+91 789-123-5831</a></li>
                        <li><a href=".">+91 213-789-4563</a></li>

                    </ul>
                </div>
            </div>
            <div className="footerbottom">
                <div className="footerlogo">
                    <img className="footerlogo" src={logo} alt="" />
                </div>
                <div className="footerIcons">
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon3} alt="" />
                    <img src={icon4} alt="" />
                </div>
            </div>
            <div className="footerbottomResponsive">
                <div className="footerlogo">
                    <img className="footerlogo" src={Footerlogo} alt="" />
                </div>
                <div className="footerIconH">
                    <p>REACH US ON</p>
                </div>
                <div className="footerIcons">
                    <img src={icon1} alt="" />
                    <img src={icon2} alt="" />
                    <img src={icon4} alt="" />
                </div>
                <div className="footerContactImgs">
                    <div className="footerAppleStore">
                        <img src={appleStore} alt="" />
                    </div>
                    <div className="footerGooglePlay">
                        <img src={googleStore} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;