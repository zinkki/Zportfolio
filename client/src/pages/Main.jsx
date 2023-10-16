import MainCarousel from '../components/Carousel';
import { Routes, Route } from 'react-router-dom';
import MainLayout from "../components/MainLayout"
import Nav from '../components/Nav';

export default function Main() {
	
	return (
  <>
	  <div id="main">
			<div className='inner'>
        <Nav/>
        <Routes>
          <Route path='/' element={<MainLayout/>} />
          <Route path='/service' element={<section><header className="major"><h2>Service</h2></header></section>} />
          <Route path='/mypage' element={<section><header className="major"><h2>MyPage</h2></header></section>} />
        </Routes>	
		  </div>
	  </div>		
  </>
	)
}