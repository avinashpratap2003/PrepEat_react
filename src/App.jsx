import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar/nav.jsx'
import Footer from './components/footer/footer.jsx'
import Home from './routes/home.jsx'
import Tiffin from './routes/tiffinServices.jsx'
import Chef from './routes/chefService.jsx'
import Laundry from './routes/laundryServices.jsx';
import Pricing from './routes/pricing.jsx'
import HomeMakerService from './routes/homeMakerServices.jsx';
import ScrollTop from './features/scroll_to_top/scrollTop.jsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <ScrollTop />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tiffin' element={<Tiffin/>}/>
        <Route path='/chef' element={<Chef/>}/>
        <Route path='/laundry' element={<Laundry/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/homemaker' element={<HomeMakerService/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}
export default App;
