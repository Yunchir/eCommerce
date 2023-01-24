import "../style/signIn.css";
import logo1 from "../img/logo1.svg";
import icon from "../img/Icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SingIn(prop) {
  const { sign } = prop;
  const { loginHandler } = prop;
  const navigate = useNavigate();
  const [userName1, setUserName] = useState("");
  const [password1, setPassword] = useState("");
  function Sign() {
    console.log(userName1);
    prop.loginHandler(userName1, password1);
    navigate("/");
  }

  return (
    <div className="modalSignIn">
      <div className="modalContent">
        <div className="logo">
          <img src={logo1} alt="" />
          <button onClick={() => sign(false)}>
            <img src={icon} alt="" onClick={() => sign} />
          </button>
        </div>
        <form>
          <div className="signInp">
            <input
              type="text"
              name="text"
              placeholder="И-мэйл эсвэл Утасны дугаар"
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="password"
              name="password"
              placeholder="Нууц үг"
              onClick={(e) => setPassword(e.target.value)}
            />
            <a href="/" className="neverMind">
              Нууц үгээ мартсан уу?
            </a>

            <button
              className="userSign"
              onClick={() => loginHandler(userName1, password1)}
            >
              Нэвтрэх
            </button>
            <div className="or">
              <span className="">Эсвэл</span>
              <div className="border"></div>
            </div>
            <button className="register">Бүртгүүлэх</button>
          </div>
        </form>
      </div>
    </div>
  );
}
