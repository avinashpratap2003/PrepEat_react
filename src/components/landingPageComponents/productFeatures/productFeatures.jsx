import React from 'react';
import './productFeatures.css';
// import Tilt from 'react-vanilla-tilt';
import Tilt from 'react-parallax-tilt'
import img1 from '../../../assets/landingPage/ecofriendly.png'
import img2 from '../../../assets/landingPage/peaceOfMind.png'
import img3 from '../../../assets/landingPage/qualityAssurance.png'
import img4 from '../../../assets/landingPage/Phones.png'
const ProductFeatures=()=>{
    // const [scale] = useState(1.25);
    // tiltEnable={false} scale={scale} transitionSpeed={2500} 

    return(
        <div className="productFeaturesContainer">
            <div className="productHeading">
                <h1>Product Features</h1>
            </div>
            <div className='emptyproduct'>

            </div>
           
            <div className="productCards">
               <div className="productFeaturesResp">
                <Tilt style={{}} className='customTilt'>
                    <div id='productCard1' className="productCard">
                        <div className="productCardImg">
                            <img src={img1} alt="" />
                        </div>
                        <div className="productCardHeading">
                            <h2>Eco-Friendly Initiatives</h2>
                        </div>
                        <div className="productCardText">
                            <p>Contribute to sustainability through eco-friendly packaging for tiffin services and environmentally-conscious homemaking strategies.</p>
                        </div>
                    </div>
                </Tilt>
                <Tilt style={{}} className='customTilt'>
                    <div id='productCard2' className="productCard">
                        <div className="productCardImg">
                            <img src={img2} alt="" />
                        </div>
                        <div className="productCardHeading">
                            <h2>Peace of Mind</h2>
                        </div>
                        <div className="productCardText">
                            <p>Reclaim your time, knowing that your laundry, meals, and home are in the hands of professionals who care.</p>
                        </div>
                    </div>
                </Tilt>
                </div>
                <div className="productFeaturesResp">
                <Tilt style={{}} className='customTilt'>
                    <div id='productCard3' className="productCard">
                        <div className="productCardImg">
                            <img src={img3} alt="" />
                        </div>
                        <div className="productCardHeading">
                            <h2>Quality Assurance</h2>
                        </div>
                        <div className="productCardText">
                            <p>Trust in our commitment to excellence – from gourmet meals to homemaker services, we guarantee top-tier quality and satisfaction.</p>
                        </div>
                    </div>
                </Tilt>
                <Tilt style={{}} className='customTilt'>
                    <div id='productCard4' className="productCard">
                        <div className="productCardImg">
                            <img src={img4} alt="" />
                        </div>
                        <div className="productCardHeading">
                            <h2>Seamless Booking</h2>
                        </div>
                        <div className="productCardText">
                            <p>User-friendly app for convenient booking and scheduling across all services, allowing you to manage your preferences effortlessly.</p>
                        </div>
                    </div>
                </Tilt>
                </div>
            </div>
        </div>
    )
}

export default ProductFeatures;
