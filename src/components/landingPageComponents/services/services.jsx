import React from 'react';
import './services.css'
import Tiffin from '../../../assets/landingPage/tiffinService.png';
import Chef from '../../../assets/landingPage/chefService.png';
import Laundry from '../../../assets/landingPage/laundryService.png';
import homeMaker from '../../../assets/landingPage/homeMakerservice.png';
const Services=()=>{
    return(
        <div className="servicesContainer">
            <div id='tiffinservicecard' className="servicesContent">
                <div className="serviceContentLeft">
                    <div className="serviceLeftHeading">
                        <h1>Tiffin service</h1>
                    </div>
                    <div className="serviceLeftText">
                        <p>Prepeat brings the joy of home-cooked meals to your doorstep. Whether you're looking for a healthy and nutritious meal or a delicious and comforting meal, Prep Eat has you covered.</p>
                    </div>
                    <div className="serviceLeftBtn">
                        <button className='servicebtn1'>Know More</button>
                        <button className='servicebtn2'>Book Now</button>
                    </div>
                </div>
                <div className="tiffinservicecardBg"></div>
                <div id='serviceImg01' className="serviceContentRight">
                    <img className='serviceImg1' src={Tiffin} alt="Img" />
                </div>
            </div>
            <div className="servicesContent">
                <div className="serviceContentRight">
                    <img className='serviceImg2' src={Chef} alt="Img" />
                </div>
                <div className="serviceContentLeft">
                    <div className="serviceLeftHeading">
                        <h1>Chef services</h1>
                    </div>
                    <div className="serviceLeftText">
                        <p>Indulge in culinary excellence with PrepEat's Chef Service. Our talented chefs curate unforgettable flavors personalized to your preferences. Elevate your meals, elevate your moments.</p>
                    </div>
                    <div className="serviceLeftBtn">
                        <button className='servicebtn1'>Know More</button>
                        <button className='servicebtn2'>Book Now</button>
                    </div>
                </div>
            </div>
            <div className="servicesContent">
                <div className="serviceContentLeft">
                    <div className="serviceLeftHeading">
                        <h1>laundry services</h1>
                    </div>
                    <div className="serviceLeftText">
                        <p>Prepeat pamper your clothes with expert care, leaving them fresh, crisp, and ready to conquer the day. Let us handle the dirty work while you enjoy the results – a wardrobe that exudes confidence and comfort.</p>
                    </div>
                    <div className="serviceLeftBtn">
                        <button className='servicebtn1'>Know More</button>
                        <button className='servicebtn2'>Book Now</button>
                    </div>
                </div>
                <div className="serviceContentRight">
                    <img className='serviceImg3' src={Laundry} alt="Img" />
                </div>
            </div>
            <div id='homemakerCard' className="servicesContent">
                <div className="homemakerBg"></div>
                <div className="serviceContentRight">
                    <img className='serviceImg4' src={homeMaker} alt="Img" />
                </div>
                <div className="serviceContentLeft">
                    <div className="serviceLeftHeading">
                        <h1>Homemaker  services</h1>
                    </div>
                    <div className="serviceLeftText">
                        <p>Experience the art of homemaking with PrepEat. Our skilled homemakers transform your space into a heaven of order and comfort. Rediscover the joy of coming home to a perfectly managed sanctuary.</p>
                    </div>
                    <div className="serviceLeftBtn">
                        <button className='servicebtn1'>Know More</button>
                        <button className='servicebtn2'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;    