import React from "react";
import './faqs.css'

const Faqs=()=>{
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
                    <p>Q.What is the delivery schedule for tiffin service meals?</p>
                    <hr />
                    <p>Q.Are there any delivery fees or minimum order requirements for tiffin service?</p>
                    <hr />
                    <p>Q.Can I change or cancel my tiffin service subscription?</p>
                    <hr />
                    <p>Q.What cuisines do you offer in your tiffin service?</p>
                    <hr />
                    <p>Q.How do I customize my tiffin service menu or request specific dishes?</p>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Faqs;