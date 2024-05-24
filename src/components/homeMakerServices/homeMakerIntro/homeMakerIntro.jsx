import React,{useState,useEffect} from 'react';
import './homeMakerIntro.css';
import HomeMakerImg1 from '../../../assets/homeMakerService/homeMakerImg1.png'
export default function HomeMakerIntro() {
    const [greeting, setGreeting] = useState('');
    const greetingText ="Welcome to PrepEat's Homemaker Services ";
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
  return (
    <div className="homeMakerIntroContainer">
        <div className="homeMakerIntroInnerContainer">
            <div className="homeMakerIntroText">
                <div className="homeMakerIntroHeading">
                    <p>{greeting}</p>
                </div>
                <div className="homeMakerIntroPara">
                    <p>Explain the value of your homemaker services, emphasizing convenience, customization, and a stress-free home environment.</p>
                </div>
            </div>
            <div className="homeMakerIntroImg">
                <img src={HomeMakerImg1} alt="" />
            </div>
        </div>
    </div>
  )
}
