import React from 'react'
import './testimonial.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Testimonial1 from '../../../assets/landingPage/testimonial1.png'
import Testimonial2 from '../../../assets/landingPage/testimonial2.png'
import Testimonial3 from '../../../assets/landingPage/testimonial3.png'
import Testimonial4 from '../../../assets/landingPage/testimonial4.png'
import Vactor from '../../../assets/landingPage/Vector.png'
import Rating from '../../../assets/landingPage/rating.png'
import { Component } from 'react'

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      hover:false
    };
    return (
      <div>
        <Slider {...settings}>
          <div className='TestimonialContainer'>
                <div className="testimoniaInnerContainer">
                    <div className="testimonialImg">
                        <img src={Testimonial1} alt="Img" />
                    </div>
                    <div className="testimonialDetails">
                        <div className="testimonialDetailsTop">
                            <div className="vector">
                                <img src={Vactor} alt="Vector" />
                            </div>
                            <div className="testimonialHeading">
                                <h2>TESTIMONIAL</h2>
                            </div>
                        </div>
                        <div className="testimonialPara">
                            <p>PrepEat has truly transformed my daily routine. Their tiffin service has been a game-changer – I now enjoy delicious and nutritious meals without the hassle of cooking. The gourmet dining experience they offer through their chef service is unparalleled, making every meal a special occasion. The homemaker service has turned my house into a harmonious haven, allowing me to focus on what truly matters. With PrepEat, I've found convenience, quality, and a new level of elevated living.</p>
                        </div>
                        <div className="testimonialName">
                            <p>Reshma</p>
                        </div>
                        <div className="testimonialRating">
                            <img src={Rating} alt="" />
                        </div>
                    </div>
                </div>
          </div>
          <div>
                <div className="testimoniaInnerContainer">
                    <div className="testimonialImg">
                        <img src={Testimonial2} alt="Img" />
                    </div>
                    <div className="testimonialDetails">
                        <div className="testimonialDetailsTop">
                            <div className="vector">
                                <img src={Vactor} alt="Vector" />
                            </div>
                            <div className="testimonialHeading">
                                <h2>TESTIMONIAL</h2>
                            </div>
                        </div>
                        <div className="testimonialPara">
                            <p>PrepEat has truly transformed my daily routine. Their tiffin service has been a game-changer – I now enjoy delicious and nutritious meals without the hassle of cooking. The gourmet dining experience they offer through their chef service is unparalleled, making every meal a special occasion. The homemaker service has turned my house into a harmonious haven, allowing me to focus on what truly matters. With PrepEat, I've found convenience, quality, and a new level of elevated living.</p>
                        </div>
                        <div className="testimonialName">
                            <p>Rehan</p>
                        </div>
                        <div className="testimonialRating">
                            <img src={Rating} alt="" />
                        </div>
                    </div>
                </div>
          </div>
          <div>
                <div className="testimoniaInnerContainer">
                    <div className="testimonialImg">
                        <img src={Testimonial3} alt="Img" />
                    </div>
                    <div className="testimonialDetails">
                        <div className="testimonialDetailsTop">
                            <div className="vector">
                                <img src={Vactor} alt="Vector" />
                            </div>
                            <div className="testimonialHeading">
                                <h2>TESTIMONIAL</h2>
                            </div>
                        </div>
                        <div className="testimonialPara">
                            <p>PrepEat has truly transformed my daily routine. Their tiffin service has been a game-changer – I now enjoy delicious and nutritious meals without the hassle of cooking. The gourmet dining experience they offer through their chef service is unparalleled, making every meal a special occasion. The homemaker service has turned my house into a harmonious haven, allowing me to focus on what truly matters. With PrepEat, I've found convenience, quality, and a new level of elevated living.</p>
                        </div>
                        <div className="testimonialName">
                            <p>Rishabh</p>
                        </div>
                        <div className="testimonialRating">
                            <img src={Rating} alt="" />
                        </div>
                    </div>
                </div>
          </div>
          <div>
                <div className="testimoniaInnerContainer">
                    <div className="testimonialImg">
                        <img src={Testimonial4} alt="Img" />
                    </div>
                    <div className="testimonialDetails">
                        <div className="testimonialDetailsTop">
                            <div className="vector">
                                <img src={Vactor} alt="Vector" />
                            </div>
                            <div className="testimonialHeading">
                                <h2>TESTIMONIAL</h2>
                            </div>
                        </div>
                        <div className="testimonialPara">
                            <p>PrepEat has truly transformed my daily routine. Their tiffin service has been a game-changer – I now enjoy delicious and nutritious meals without the hassle of cooking. The gourmet dining experience they offer through their chef service is unparalleled, making every meal a special occasion. The homemaker service has turned my house into a harmonious haven, allowing me to focus on what truly matters. With PrepEat, I've found convenience, quality, and a new level of elevated living.</p>
                        </div>
                        <div className="testimonialName">
                            <p>Rashmi</p>
                        </div>
                        <div className="testimonialRating">
                            <img src={Rating} alt="" />
                        </div>
                    </div>
                </div>
          </div>
        </Slider>
      </div>
    );
  }
}
