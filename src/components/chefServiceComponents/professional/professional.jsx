import './professional.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ellipse1 from '../../../assets/chefService/Ellipse1.png'
import ellipse2 from '../../../assets/chefService/Ellipse2.png'
import ellipse3 from '../../../assets/chefService/Ellipse3.png'
import ellipse4 from '../../../assets/chefService/Ellipse4.png'
import ellipse5 from '../../../assets/chefService/Ellipse5.png'
import {BsFillStarFill} from 'react-icons/bs';
import { Component } from 'react';

export default class AutoPlay extends Component{
    render() {
        const settings = {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 3000,
          autoplaySpeed: false,
          cssEase: "linear",
          hover:false
        };
    return(
        <div className="professionalContainer">
                <div className="professionalHeading">
                    <p>OUR <span>PROFESSIONAL</span> CHEFS</p>
                </div>
                <Slider {...settings}>
                    <div className="chefCard">
                    <div className="chefCardText">
                        <div className="chefImg">
                            <img src={ellipse1} alt="" />
                        </div>
                        <div className="chefCardText">
                            <div className="chefName">
                                <p>Amit</p>
                            </div>
                            <div className="chefExperience">
                                <p>12Years of Experience</p>
                            </div>
                            <div className="chefRating">
                                <div className="starts">
                                    <BsFillStarFill style={{ color: 'white' }}/> <p>4.5</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="chefCard">
                    <div className="chefCardText">
                        <div className="chefImg">
                            <img src={ellipse2} alt="" />
                        </div>
                        <div className="chefCardText">
                            <div className="chefName">
                                <p>Amit</p>
                            </div>
                            <div className="chefExperience">
                                <p>12Years of Experience</p>
                            </div>
                            <div className="chefRating">
                                <div className="starts">
                                    <BsFillStarFill style={{ color: 'white' }}/> <p>4.5</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="chefCard">
                    <div className="chefCardText">
                        <div className="chefImg">
                            <img src={ellipse3} alt="" />
                        </div>
                        <div className="chefCardText">
                            <div className="chefName">
                                <p>Amit</p>
                            </div>
                            <div className="chefExperience">
                                <p>12Years of Experience</p>
                            </div>
                            <div className="chefRating">
                                <div className="starts">
                                    <BsFillStarFill style={{ color: 'white' }}/> <p>4.5</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="chefCard">
                    <div className="chefCardText">
                        <div className="chefImg">
                            <img src={ellipse4} alt="" />
                        </div>
                        <div className="chefCardText">
                            <div className="chefName">
                                <p>Amit</p>
                            </div>
                            <div className="chefExperience">
                                <p>12Years of Experience</p>
                            </div>
                            <div className="chefRating">
                                <div className="starts">
                                    <BsFillStarFill style={{ color: 'white' }}/> <p>4.5</p>
                                </div>
                            </div>
                        </div>
                     </div>
                    </div>
                    <div className="chefCard">
                    <div className="chefCardText">
                        <div className="chefImg">
                            <img src={ellipse5} alt="" />
                        </div>
                        <div className="chefCardText">
                            <div className="chefName">
                                <p>Amit</p>
                            </div>
                            <div className="chefExperience">
                                <p>12Years of Experience</p>
                            </div>
                            <div className="chefRating">
                                <div className="starts">
                                    <BsFillStarFill style={{ color: 'white' }}/> <p>4.5</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </Slider>
                </div>
    );
    }
}