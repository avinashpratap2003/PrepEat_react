import React, {useState, useEffect} from "react";
import './chefIntro.css';
import IntroBgImg from '../../../assets/chefService/servicesBg1.png'
const ChefIntro=()=>{
    const [greeting, setGreeting] = useState('');
    const greetingText ="Let Our Expert Chef Take Care of your next event";
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
        <div className="chefIntroContainer">
            <div className="chefintroInnerContainer">
                <div className="chefIntroBg">
                    <img className="chefIntroBgImg" src={IntroBgImg} alt="" />
                </div>
                <div className="chefIntroText">
                    <div className="introHeading">
                        <p>{greeting}</p>
                    </div>
                    <div className="introText">
                        <p>We'll take care of everything from the food to the service, so you can relax and enjoy your event.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChefIntro;