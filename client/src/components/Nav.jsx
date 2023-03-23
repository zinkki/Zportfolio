import { useNavigate } from "react-router-dom";

export default function Navi() {
	const navigate = useNavigate();
  return (
	<>
  <header id="header">
		<a onClick={() => { navigate('/main') }} className="logo"><strong>BookTest</strong> by zinkki</a>
			<ul className="icons">
				<li><a className="icon brands fa-twitter" onClick={() => { navigate('/main/service') }}>Service</a></li>
				<li><a className="icon brands fa-snapchat-ghost" onClick={() => {navigate('/main/mypage') }}>MyPage</a></li>
				<li><a className="icon brands fa-facebook-f" onClick={() => { navigate('/login') }}>login</a></li>
				<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
				<li><a href="#" className="icon brands fa-medium-m"><span className="label">Medium</span></a></li>
			</ul>
	</header>
  </>
	);
}
