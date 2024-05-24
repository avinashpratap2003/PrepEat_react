import React from "react";
import './cuisines.css';
import cuisines1 from '../../../assets/chefService/cuisiness1.png'
import cuisines2 from '../../../assets/chefService/cuisiness2.png'
import cuisines3 from '../../../assets/chefService/cuisiness3.png'
import cuisines4 from '../../../assets/chefService/cuisiness4.png'
import cuisines5 from '../../../assets/chefService/cuisiness5.png'
import cuisines6 from '../../../assets/chefService/cuisiness6.png'
import cuisines7 from '../../../assets/chefService/cuisiness7.png'
import cuisines8 from '../../../assets/chefService/cuisiness8.png'
import cuisines9 from '../../../assets/chefService/cuisiness9.png'
const Cuisiness=()=>{
    return(
        <div className="cuisinesContainer">
            <div className="cuisinesInnerContainer">
                <div className="cuisinesHeading">
                    <h4>Types of Cuisines we offer</h4>
                </div>
                <div className="cuisinesCards">
                    <div className="cuisinesCard">
                        <img src={cuisines1} alt="" />
                    </div>
                    <div className="cuisinesCard">
                        <img src={cuisines2} alt="" />
                    </div>
                    <div className="cuisinesCard">
                        <img src={cuisines3} alt="" />
                    </div>
                    <div className="cuisinesCard">
                        <img src={cuisines4} alt="" />
                    </div>
                    <div className="cuisinesCard">
                        <img src={cuisines5} alt="" />
                    </div>
                    <div className="cuisinesCard">
                        <img src={cuisines6} alt="" />
                    </div>
                    <div className="cuisinesCard">
                        <img src={cuisines7} alt="" />
                    </div>
                    <div className="cuisinesCard">
                        <img src={cuisines8} alt="" />
                    </div>
                    <div className="cuisinesCard">
                        <img src={cuisines9} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cuisiness;