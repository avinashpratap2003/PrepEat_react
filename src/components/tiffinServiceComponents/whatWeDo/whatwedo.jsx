import React from "react";
import './whatwedo.css';
import Fade from 'react-reveal/Fade';
import whatwedoImg from '../../../assets/tiffinServices/whatWeDoImg.png'
const WhatWeDo=()=>{
    return(
        <div className="whatWeDoContainer">
            <div className="whatwedoInnerContainer">
                <div className="whatwedoHeading">
                    <Fade left><p>What we Do...</p></Fade>
                </div>
                <div className="whatwedoContent">
                    <div className="whatwedoImg">
                        <img src={whatwedoImg} alt="" />
                    </div>
                    <div className="whatwedoText">
                        <div className="whatwedoTextPara">
                            <Fade right><p>Creating a cooking strategy for a month can help you save time and ensure that you have delicious and nutritious meals throughout the month</p></Fade>
                        </div>
                        <div className="whatwedoTextHeading">
                            <p>Strategy for one month by ricoz </p>
                            <Fade right>
                                <ul>
                                    <li>Plan your meals</li>
                                    <li>Choose recipes</li>
                                    <li>Batch cooking</li>
                                    <li>Use versatile ingredients</li>
                                    <li>Freezer organization</li>
                                    <li>Plan leftovers</li>
                                    <li>Plan for quick and easy meals</li>
                                </ul>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo;