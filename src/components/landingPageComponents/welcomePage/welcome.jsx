import React,{useState, useEffect} from "react";
import './welcome.css';
import useRipple from "use-ripple-hook";
import WelcomeImg from '../../../assets/landingPage/welcome.png'

const Welcome=()=>{
    const [greeting, setGreeting] = useState('');
    const greetingText ="CHEF SERVICES";
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
        // Start typing when the component mounts (page loads)
        typeNextCharacter();
    },[]);
    const [ripple1, event1] = useRipple({duration:2000});
    const [ripple2, event2] = useRipple({duration:2000});
    
    return(
        <div className="welcomeContainer">
            <div className="welcomeInnerContainer">
                <div className="welcomeText">
                    <div className="extraContainer">
                        <div className="welcomeL1">
                            <h1><span className="welcometo">Welcome to </span><span className="prep">Prep</span><span className="eat">Eat</span></h1>
                        </div>
                        <div className="welcomeL2">
                            <h1><span>WE  HAVE</span></h1>
                        </div>
                        <div className="welcomeL3">
                            <h1><span>{greeting}</span></h1>
                        </div>
                    </div>
                    <div className="welcomePara">
                        <p>Enjoy a suite of personalized services, from gourmet dining and immaculate laundry care to nutritious tiffin meals and homemaking expertise, all designed to enhance your everyday life.</p>
                    </div>
                    <div className="welcomeBtns"> 
                        <div className="welcomebutton1">
                            <button ref={ripple1} onMouseDown={event1} className="welcomebtn1">Sign Up</button>
                        </div>
                        <div className="welcomebutton2">
                            <button ref={ripple2} onMouseDown={event2} className="welcomebtn2">Download App</button>
                        </div>
                    </div>
                </div>
                <div className="welcomebackground">
                </div>
                <div className="welcomeImg">
                    <img src={WelcomeImg} alt="" />
                    
                </div>
            </div>
        </div>
    )
}

export default Welcome;  