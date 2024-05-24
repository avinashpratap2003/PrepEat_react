import ChefServiceIntro from '../components/chefServiceComponents/chefServiceIntro/chefInto'
import Ourservices from '../components/chefServiceComponents/ourServices/ourServices'
import Upcoming from '../components/chefServiceComponents/upcoming/upcoming'
import Occasions from '../components/chefServiceComponents/occasions/occasions'
import Cuisines from '../components/chefServiceComponents/typeofCuisines/cuisines'
import WhyChooseUs from '../components/chefServiceComponents/whyChooseUs/whyChooseUs'
import HowItWorks from '../components/chefServiceComponents/howItWorks/howItWorks'
import Professional from '../components/chefServiceComponents/professional/professional'

const Chef=()=>{
    return(
        <>
          <ChefServiceIntro/>
          <Ourservices/>
          <Upcoming/>
          <Occasions/>
          <Cuisines/>l
          <WhyChooseUs/>
          <HowItWorks/>
          <Professional/>

        </>
    )
}
export default Chef;