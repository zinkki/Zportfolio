import Navi from '../components/Nav';
import SideBar from '../components/SideBar';
import MainCarousel from '../components/Carousel';


export default function Main() {
	
	return (
		<>
			<MainCarousel></MainCarousel>
			<Navi></Navi>
			<SideBar></SideBar>
		</>
	)
}