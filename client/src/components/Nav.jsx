import { useNavigate } from "react-router-dom";

export default function Navi() {
  const navigate = useNavigate();
  return (
    <>
      <header id="header">
        <a
          onClick={() => {
            navigate("/main");
          }}
          style={{ cursor: "pointer" }}
          className="logo"
        >
          <strong>BookTest</strong> by zinkki
        </a>
        <ul className="icons">
          <li>
            <a
              onClick={() => {
                navigate("/main/service");
              }}
            >
              Service
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/main/mypage");
              }}
            >
              MyPage
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                navigate("/login");
              }}
            >
              login
            </a>
          </li>
        </ul>
      </header>
    </>
  );
}
