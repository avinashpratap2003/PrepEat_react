import GharKaSwad from '../components/tiffinServiceComponents/gharKaSwad/gharKaSwad'
import Trail from '../components/tiffinServiceComponents/trail/trail';
import Menu from '../components/tiffinServiceComponents/menu/menu'
import WhatWeDo from '../components/tiffinServiceComponents/whatWeDo/whatwedo';
import Hire from '../components/tiffinServiceComponents/hire/hire'
// import TiffinFaqs from '../components/tiffinServiceComponents/tiffinFAQs/faqs'

const TiffinServices=()=>{
    return(
        <>
        <GharKaSwad/>
        <Trail/>
        <Menu/>
        <WhatWeDo/>
        <Hire/>
        {/* <TiffinFaqs/> */}
        </>
    )
}

export default TiffinServices;