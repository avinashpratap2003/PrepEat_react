import Welcome from "../components/landingPageComponents/welcomePage/welcome";
import ProductFeatures from "../components/landingPageComponents/productFeatures/productFeatures"
// import Services from "../components/landingPageComponents/services/services";
// import Check from "../components/landingPageComponents/checkAvaiability/check";
import Testimonial from "../components/landingPageComponents/testimonials/testimonial";
import DownloadOurApp from "../components/landingPageComponents/downloadApp/download";
// import LandingPageFAQs from "../components/landingPageComponents/landingpageFAQa/FAQs"

const Home=()=>{
    return(
        <>
        <Welcome/>
        <ProductFeatures/>
        {/* <Services/> */}
        {/* <Check/> */}
        <Testimonial/>
        <DownloadOurApp/>
        {/* <LandingPageFAQs/> */}
        </>
    )
}

export default Home;
