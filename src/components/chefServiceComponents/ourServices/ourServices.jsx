import React from "react";
import './ourServices.css';
import ServiceImg1 from '../../../assets/chefService/servicesImg1.png'
import ServiceImg2 from '../../../assets/chefService/servicesImg2.png'
import ServiceImg3 from '../../../assets/chefService/servicesImg3.png'
import ServiceImg4 from '../../../assets/chefService/servicesImg4.png'
const Ourservices=()=>{
    return(
        <div className="ourservicesContainer">
            <div className="ourservicesInnerContainer">
                <div className="ourservicesHeading">
                    <p>OUR SERVICES</p>
                </div>
                <div className="ourserviceCards">
                    <div className="ourserviceCard">
                        <div className="cardImg">
                            <Roll left><img src={ServiceImg1} alt="" /></Roll>
                        </div>
                        <div className="cardDetails">
                            <p>Chefs For Occasion</p>
                        </div>
                        <div className="cardStarting">
                            <p>Starting from</p>
                        </div>
                        <div className="cardprice">
                            <p>2000</p>
                        </div>
                    </div>
                    <div className="ourserviceCard">
                        <div className="cardImg">
                            <Roll left><img src={ServiceImg2} alt="" /></Roll>
                        </div>
                        <div className="cardDetails">
                            <p>Chefs For Occasion</p>
                        </div>
                        <div className="cardStarting">
                            <p>Starting from</p>
                        </div>
                        <div className="cardprice">
                            <p>300</p>
                        </div>
                    </div>
                    <div className="ourserviceCard">
                        <div className="cardImg">
                            <Roll right><img src={ServiceImg3} alt="" /></Roll>
                        </div>
                        <div className="cardDetails">
                            <p>Chefs For Occasion</p>
                        </div>
                        <div className="cardStarting">
                            <p>Starting from</p>
                        </div>
                        <div className="cardprice">
                            <p>4000</p>
                        </div>
                    </div>
                    <div className="ourserviceCard">
                        <div className="cardImg">
                            <Roll right><img src={ServiceImg4} alt="" /></Roll>
                        </div>
                        <div className="cardDetails">
                            <p>Chefs For Occasion</p>
                        </div>
                        <div className="cardStarting">
                            <p>Starting from</p>
                        </div>
                        <div className="cardprice">
                            <p>200</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ourservices;