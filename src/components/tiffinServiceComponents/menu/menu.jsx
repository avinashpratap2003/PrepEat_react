import React from "react";
import './menu.css'
import HeadShake from 'react-reveal/HeadShake';
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import {BsTelephone} from 'react-icons/bs';
import {IoLogoWhatsapp} from 'react-icons/io5';
const Menu=()=>{
    return(
        <div className="MenuContainer">
            <div className="menuInnerContainer">
                <div className="menuHeading">
                    <HeadShake><h2>Tiffin Menu of the week</h2></HeadShake>
                </div>
                <div className="menuTable">
                    <table className="table1">
                        <tr className="table1row">
                            <th className="table1H">DAY</th>
                            <th className="table1H">Breakfast</th>
                            <th className="table1H">Lunck</th>
                            <th className="table1H">Dinner</th>
                        </tr>
                        <tr className="table1row">
                            <th className="table1H">Sunday</th>
                            <td className="table1data">Veg Chowmin, 1 glass milk</td>
                            <td className="table1data">arahar dal, Bhindi, 4 Roti, Rice, salad, achar</td>
                            <td className="table1data">Lauki Kofta, Mix Veg, 4 Roti, achar</td>
                        </tr>
                        <tr className="table1row">
                            <th className="table1H">Monday</th>
                            <td className="table1data">Poha, 1 glass milk </td>
                            <td className="table1data">Egg Curry, Raita, 4 Roti, Rice, salad, achar </td>
                            <td className="table1data">Palak Paneer, 4 Roti, Rice,  achar</td>
                        </tr>
                        <tr className="table1row">
                            <th className="table1H">Tuesday</th>
                            <td className="table1data">aaloo sandwich, 1 glass milk</td>
                            <td className="table1data">Masoor dal, baingan, 4 Roti, Rice, salad,  achar</td>
                            <td className="table1data"> aaloo Matar, 5 Puri, Kheer, salad, achar</td>
                        </tr>
                        <tr className="table1row">
                            <th className="table1H">Wednesday</th>
                            <td className="table1data">steamed Poha, 1 glass milk </td>
                            <td className="table1data">Patta Gobhi, Chana dal, 4 Roti, Rice, salad, achar</td>
                            <td className="table1data">Soyabeen  aaloo, 4 Roti,  achar</td>
                        </tr>
                        <tr className="table1row">
                            <th className="table1H">Thursday</th>
                            <td className="table1data">Fried Rice,1 glass milk</td>
                            <td className="table1data">Kadhi, aaloo pyaj, Raita, 4 Roti, Rice, salad, achar</td>
                            <td className="table1data">Kadhi, aaloo pyaj, Raita, 4 Roti, Rice, salad, achar</td>
                        </tr>
                        <tr className="table1row">
                            <th className="table1H">Friday</th>
                            <td className="table1data">Veg sandwich,1 glass milk</td>
                            <td className="table1data">Rajma, Raita, 4 Roti, Rice, salad, achar</td>
                            <td className="table1data">3 Aaloo Pratha, dahi, Sauce, achar</td>
                        </tr>
                        <tr className="table1row">
                            <th className="table1H">Saturday</th>
                            <td className="table1data">Upma, 1 glass milk </td>
                            <td className="table1data"> Aaloo Gobhi, 4 Roti, Rice, salad, achar</td>
                            <td className="table1data">chhole, 4 Bhature,  salad, achar</td>
                        </tr>
                    </table>
                </div>
                <div className="downloadMenu">
                    <div className="downloadMenuBtn">
                        <button>Download Tiffin Menu</button>
                    </div>
                </div>
                <div className="menuTiming">
                    <div className="timeLeft">
                        <Roll left>
                        <p>Breakfast time</p>
                        </Roll>
                        <span>8:00 am to 10:00 am</span>
                    </div>
                    <div className="timeMiddle">
                        <Fade top>
                        <p>Lunch time</p>
                        </Fade>
                        <span>1:00 pm to 2 pm</span>
                    </div>
                    <div className="timeRight">
                        <Roll right>
                        <p>Dinner time</p>
                        </Roll>
                        <span>8:00 pm to 9:00 pm</span>
                    </div>
                </div>
                <div className="menuContact">
                    <div className="contactbtn">
                        <button className="contact1" ><BsTelephone  style={{ width: '25px', height: '25px' }}/> Contact Us</button>
                    </div>
                    <div className="whatsappbtn">
                        <button className="contact2"><IoLogoWhatsapp  style={{ width: '30px', height: '30px' }}/> WhatsApp</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;