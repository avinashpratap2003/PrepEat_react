import React from "react";
import './hire.css'
import HireImg from '../../../assets/tiffinServices/chef.png'
const Hire=()=>{
    return(
        <div className="hireMainContainer">
            <div className="hireContainer">
                    <div className="hireBg">
                    </div>
                    <div className="mask2">
                        <img className="intro-img2" src={HireImg} alt="" />
                    </div>
                    <div className="hireText">
                        <div className="hireHeading">
                            <Bounce top><p>Want To Hire A Personal Chef ?</p></Bounce>
                        </div>
                        <div className="hirePara">
                            <p>Experience the epitome of culinary delight with PrepEat's 'Hire a Personal Chef' service. Elevate your dining experience as our talented chefs bring their expertise directly to your kitchen, curating exquisite meals tailored to your taste. Embrace the luxury of personalized gourmet dining without leaving the comfort of your home.</p>
                        </div>
                        <div className="hirebtn">
                            <Pulse forever><button className="hirebtn1">Book Now</button></Pulse>
                        </div>
                    </div>
            </div>
            <div className="helpAndSupportouter">
                <div className="helpAndSupportContainer">
                    <div className="helpAndSupport">
                        <p>Help and Support</p>
                    </div>
                    <div className="helpAndSupportPara">
                        <p>In case of any queries, refer to the FAQ’s or Contact us via the ‘help’ section below</p>
                    </div>
                    <div className="helpAndSupportBtn">
                        <button>FAQ's</button>
                    </div>
                </div>
            </div>
        </div>
 
    )
}

export default Hire;