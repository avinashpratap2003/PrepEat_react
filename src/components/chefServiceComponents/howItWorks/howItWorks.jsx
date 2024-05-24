import React from "react";
import './howItWorks.css'
import Slide from 'react-reveal/Slide';
import Spin from 'react-reveal/Spin';
import Pulse from 'react-reveal/Pulse';
import HiwCard1 from '../../../assets/chefService/hiw1.png'
import HiwCard2 from '../../../assets/chefService/hiw2.png'
import HiwCard3 from '../../../assets/chefService/hiw3.png'
import HiwCard4 from '../../../assets/chefService/hiw4.png'
import HiwCard5 from '../../../assets/chefService/hiw5.png'
import HiwCard6 from '../../../assets/chefService/hiw6.png'
import discountIcon1 from '../../../assets/chefService/PrepEat/avocado.png'
import discountIcon2 from '../../../assets/chefService/PrepEat/chef.png'
import discountIcon3 from '../../../assets/chefService/PrepEat/chef1.png'
import discountIcon4 from '../../../assets/chefService/PrepEat/cleaver.png'
import discountIcon5 from '../../../assets/chefService/PrepEat/cutlery.png'
import discountIcon6 from '../../../assets/chefService/PrepEat/frying-pan.png'
import discountIcon7 from '../../../assets/chefService/PrepEat/old-chef.png'
import discountIcon8 from '../../../assets/chefService/PrepEat/spade.png'
import discountIcon9 from '../../../assets/chefService/PrepEat/strawberry.png'
import discountIcon10 from '../../../assets/chefService/PrepEat/tacos.png'
const Howitworks=()=>{
    return(
        <div className="howitworksContainer">
            <div className="howitworksInnerContainer">
                <div className="howitworkdsHeading">
                    <h2>HOW IT <span>WORKS</span> ?</h2>
                </div>
                <div className="howitworksIcons">
                    <div className="howitworksIconCards">
                        <div className="howitworksIconsCardsResp">
                            <Slide left>
                             <div className="howitworksIconCard">
                                 <img src={HiwCard1} alt="" />
                                 <p>Book Chef and Occasion</p>
                             </div>
                            </Slide>
                             <Slide left>
                             <div className="howitworksIconCard">
                                 <img src={HiwCard2} alt="" />
                                 <p>Select menu and all mandatory details</p>
                             </div>
                             </Slide>
                             <Slide left>
                             <div className="howitworksIconCard">
                                 <img src={HiwCard3} alt="" />
                                 <p> Ingredients listed is shared ( Select either cook brings ingredients or not)</p>
                             </div>
                             </Slide>
                        </div>
                        <div className="howitworksIconsCardsResp">
                            <Slide right>
                            <div className="howitworksIconCard">
                                <img src={HiwCard4} alt="" />
                                <p>Make the payment</p>
                            </div>
                            </Slide>
                            <Slide right>
                            <div className="howitworksIconCard">
                                <img src={HiwCard5} alt="" />
                                <p>Chef arrives Home & cook food</p>
                            </div>
                            </Slide>
                            <Slide right>
                                <div className="howitworksIconCard">
                                <img src={HiwCard6} alt="" />
                                <p>Chef arrives Home & cook food</p>
                            </div></Slide>
                        </div>
                    </div>
                </div>
                <div className="howItworksDiscountBanner">
                    <div className="discountBannerText">
                        <Pulse forever><h3>GET <span>20% Discount </span></h3></Pulse>
                        <h2>ON FIRST ORDER</h2>
                        <h4>USE CODE: #WELCOME10</h4>
                    </div>
                    <div className="discountBannerImgs">
                        <div id="bannerIcons" className="cutlery">
                            <Spin duration={4000} forever><img className="cutleryImg" src={discountIcon1} alt="" /></Spin>
                        </div>
                        <div className="strawberry">
                            <Spin duration={6000} forever><img id="bannerIcons" src={discountIcon2} alt="" /></Spin>
                        </div>
                        <div id="bannerIcons" className="tacos">
                            <Spin duration={8000} forever right><img src={discountIcon3} alt="" /></Spin>
                        </div>
                        <div id="bannerIcons" className="chef">
                            <Spin duration={10000} forever right><img src={discountIcon8} alt="" /></Spin>
                        </div>
                        <div id="bannerIcons" className="fryingPan">
                            <Spin duration={4000} forever><img src={discountIcon4} alt="" /></Spin>
                        </div>
                        <div id="bannerIcons" className="avocado">
                            <Spin duration={6000} forever><img src={discountIcon5} alt="" /></Spin>
                        </div>
                        <div id="bannerIcons" className="spade">
                            <Spin duration={8000} forever><img src={discountIcon6} alt="" /></Spin>
                        </div>
                        <div id="bannerIcons" className="cleaver">
                            <Spin duration={10000} forever><img src={discountIcon9} alt="" /></Spin>
                        </div>
                        <div id="bannerIcons" className="icon10">
                            <Spin duration={12000} forever><img src={discountIcon10} alt="" /></Spin>
                        </div>
                        <div className="oldchefImg">
                            <img className="oldchef" src={discountIcon7} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Howitworks;


