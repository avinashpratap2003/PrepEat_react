import React,{useState,useEffect} from 'react';
import './laundryIntro.css';
import {TbCurrencyRupee} from 'react-icons/tb'
import useRipple from 'use-ripple-hook';
import laundryIntroBg from '../../../assets/laundryService/laundryIntroBg.png'
import laundryIntroicon1 from '../../../assets/laundryService/laundryIntroIcon1.png'
import laundryIntroicon2 from '../../../assets/laundryService/laundryIntroIcon2.png'
import laundryIcon1 from '../../../assets/laundryService/laundryIcon1.png'
import laundryIcon2 from '../../../assets/laundryService/laundryIcon2.png'
import laundryIcon3 from '../../../assets/laundryService/laundryIcon3.png'
import laundryIcon4 from '../../../assets/laundryService/laundryIcon4.png'
import laundryIcon5 from '../../../assets/laundryService/laundryIcon5.png'
import laundryVector from '../../../assets/laundryService/laundryVector.png'
const LaundryIntro=()=>{
    const [ripple1, event1] = useRipple({duration:2000});
    const [ripple2, event2] = useRipple({duration:2000});
    const [ripple3, event3] = useRipple({duration:2000});
    const [greeting, setGreeting] = useState('');
    const greetingText ="Quality Laundry Services at Your Doorstep";
    const typingSpeed=100;
    useEffect(()=>{
        let currentIndex=0;
        const typeNextCharacter=()=>{
            if(currentIndex<greetingText.length){
                setGreeting(greetingText.substring(0,currentIndex+1));
                currentIndex++;
                setTimeout(typeNextCharacter,typingSpeed);
            }
        };
        typeNextCharacter();
    },[]);
    return(
        <div className="laundryIntroContainer">
            <div className="laundryIntroInnerContainer">
                <div className="laundryIntroUpper">
                    <div className="introvector">
                        <img src={laundryVector} alt="" />
                    </div>
                    <div className="laundryIntroUpperText">
                        <div className="laundryIntroHeading">
                            <p>{greeting}</p>
                        </div>
                        <div className="laundryIntroBooknow">
                            <div className="laundryIntroBooknowLeft">
                                <img src={laundryIntroicon1} alt="" />
                                <h>Wash & Fold</h>
                                <div className="introprice">
                                    <TbCurrencyRupee/><p>100/Kg</p>
                                </div>
                                <div className="introbutton">
                                    <Pulse forever>
                                    <button ref={ripple1} onMouseDown={event1} className='introBtn1'>Book now</button>
                                    </Pulse>
                                </div>
                            </div>
                            <div className="laundryIntroBooknowRight">
                                <img src={laundryIntroicon2} alt="" />
                                <h>Wash & Iron</h>
                                <div className="introprice">
                                    <TbCurrencyRupee/><p>120/Kg</p>
                                </div>
                                <div className="introbutton">
                                    <Pulse forever>
                                    <button ref={ripple2} onMouseDown={event2} className='introBtn2'>Book now</button>
                                    </Pulse>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="laundryIntroUpperImg">
                        <img src={laundryIntroBg} alt="" />
                    </div>
                </div>
                <div className="laundryIntroLower">
                    <div className="laundryIntroCards">
                        <div className="laundryIntroCard">
                            <img src={laundryIcon1} alt="" />
                            <Rotate top left><p>Dry Cleaning</p></Rotate>
                        </div>
                        <div className="laundryIntroCard">
                            <img src={laundryIcon2} alt="" />
                            <Rotate top left><p>Wash & Fold</p></Rotate>
                        </div>
                        <div className="laundryIntroCard">
                            <img src={laundryIcon3} alt="" />
                            <Rotate top left><p>Wash & Iron</p></Rotate>
                        </div>
                        <div className="laundryIntroCard">
                            <img src={laundryIcon4} alt="" />
                            <Rotate top left><p>Wash & Iron</p></Rotate>
                        </div>
                        <div className="laundryIntroCard">
                            <img src={laundryIcon5} alt="" />
                            <Rotate top left><p>Free Pickup & Delivery</p></Rotate>
                        </div>
                    </div>
                    <div className="laundryInrtoPricingBtn">
                        <button ref={ripple3} onMouseDown={event3}>See Pricing Details</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LaundryIntro;