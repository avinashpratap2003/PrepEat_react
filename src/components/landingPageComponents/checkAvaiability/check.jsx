import React from 'react';
import './check.css';
import CheckImg from '../../../assets/landingPage/phones1.png'
 
const Check=()=>{
    return(
        <div className="checkContainer">
            <div className="checkInnerContainer">
                <div className="checkLeft">
                    <div className='checkHeading1'>
                        <h1>You’re just a step away from throwing away your daily <span className='heading1Colored'>hassle</span>  </h1>
                    </div>
                    <div className='checkHeading2'>
                        <h4>Check Availability</h4>
                    </div>
                    <div className="checkInput">
                        <input type="text" placeholder='Enter Pincode' />
                        <button>Locate Me</button>
                    </div>
                </div>
                <div className="checkRight">
                    <div className='checkImg'>
                        <img src={CheckImg} alt="Img" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Check;