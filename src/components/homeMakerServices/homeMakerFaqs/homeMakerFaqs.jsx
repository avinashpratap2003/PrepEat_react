import React from "react";
import './homeMakerFaqs.css'

const HomeMakerFaqs=()=>{
    return(
        <div className="faqsContainer">
            <div className="faqsInnerContainer">
                <div className="faqsHeading">
                    <p>FAQs</p>
                </div>
                <div className="faqsSubHeadings">
                    <ul>
                        <li><a href=".">Tiffin Service</a></li>
                        <li><a href=".">Chef Service</a></li>
                        <li><a href=".">Laundry Service</a></li>
                        <li><a href=".">Homemaker Service</a></li>
                        <li><a href=".">Booking & Payment</a></li>
                        <hr />
                    </ul>
                </div>
                <div className="questions">
                    <p>Q.What tasks are included in your homemaking services?</p>
                    <hr />
                    <p>Q.Can I request a specific homemaker for my services?</p>
                    <hr />
                    <p>Q.How do I book homemaking services, and what is the scheduling process?</p>
                    <hr />
                    <p>Q.What safety measures are in place when homemakers visit clients' homes?</p>
                    <hr />
                    <p>Q.Are your homemakers trained and background-checked?</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default HomeMakerFaqs;