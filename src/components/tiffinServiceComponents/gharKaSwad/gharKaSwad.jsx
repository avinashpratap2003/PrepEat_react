import React,{useState,useEffect} from "react";
import './gharKaSwad.css'
import Mask from '../../../assets/tiffinServices/gharKaSwaadBg.png'
import Textimg from '../../../assets/tiffinServices/gharKaSwaadText.png'
import Img from '../../../assets/tiffinServices/gharKaSwaadImg.png'
const GharKaSwad=()=>{
    const [greeting, setGreeting] = useState('');
    const greetingText ="Fall For the taste of home with our Tiffin service. Made with fresh, seasonal ingredients and cooked with love, our food is sure to bring a smile to your face.";
    const typingSpeed=50;
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
        <div className="gharkaswadContainer">
            <div className="mask1">
                <img className="intro-img1" src={Mask} alt="mask" />
            </div>
            <div className="content">
                <div className="gharkaswadContentLeft">
                    <Pulse forever><img src={Textimg} alt="" /></Pulse>
                    <p>{greeting}</p>
                </div>
                <div className="gharkaswadContentRight">
                    <img src={Img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default GharKaSwad;