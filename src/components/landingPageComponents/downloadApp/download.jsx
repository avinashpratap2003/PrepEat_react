import React from "react";
import './download.css';
import QR from '../../../assets/landingPage/QR.png'
import GooglePlay from '../../../assets/landingPage/googleStore.png'
import AppleStore from '../../../assets/landingPage/appleStore.png'
import facbook from '../../../assets/landingPage/Facebook.png'
import twitter from '../../../assets/landingPage/twitter.png'
import instagram from '../../../assets/landingPage/instagram.png'
import phones from '../../../assets/landingPage/phones1.png'
const DownloadApp=()=>{
    return(
        <div className="downloadAppContainer">
            <div className="downloadAppInnerContainer1">
                <div className="downloadDetails">
                    <div className="downloadHeading">
                        <p>Download</p>
                    </div>
                    <div className="downloadSubheading">
                        <p>Our App</p>
                    </div>
                    <div className="downloadPara">
                        <p>Experience convenience at your fingertips – download the PrepEat app and unlock a world of tailored services.</p>
                    </div>
                    <div className="downloadQR">
                        <img src={QR} alt="" />
                    </div>
                    <div className="downloadLinks">
                        <div className="googlePlay">
                            <img src={GooglePlay} alt="" />
                        </div>
                        <div className="AppleStore">
                            <img src={AppleStore} alt="" />
                        </div>
                    </div>
                    <div className="downloadContacticon">
                        <img src={facbook} alt="" />
                        <img className="twitter" src={twitter} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
                <div className="downloadImg">
                    <img src={phones} alt="" />
                </div>
            </div>
            <div className="downloadAppInnerContainer2">
                <div className="newdownload1">
                    <div className="downloadHeading">
                        <p>Download</p>
                    </div>
                    <div className="downloadSubheading">
                        <p>Our App</p>
                    </div>
                    <div className="downloadPara">
                        <p>Experience convenience at your fingertips – download the PrepEat app and unlock a world of tailored services.</p>
                    </div>
                </div>
                <div className="downloadDetails">
                    <div className="newdownload2">
                        <div className="downloadQR">
                            <img src={QR} alt="" />
                        </div>
                        <div className="downloadLinks">
                            <div className="googlePlay">
                                <img src={GooglePlay} alt="" />
                            </div>
                            <div className="AppleStore">
                                <img src={AppleStore} alt="" />
                            </div>
                        </div>
                        <div className="downloadIcons">
                            <img src={facbook} alt="" />
                            <img className="twitter" src={twitter} alt="" />
                            <img src={instagram} alt="" />
                        </div>
                    </div>  
                    <div className="newdownload3">
                        <div className="downloadImg">
                            <img src={phones} alt="" />
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default DownloadApp;