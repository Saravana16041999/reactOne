import { useContext, useEffect, useRef, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import validator from "validator";
import { Appcontext } from "../App";

const Signin = () => {
  const navigate = useNavigate();
  const { setlogin } = useContext(Appcontext);

  const [user, setUser] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );
  const [error, setError] = useState();
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.current.value === "" || password.current.value === "") {
      setError("Enter a Valaid Email and Password");
    } else if (password.current.value.length < 7) {
      setError("Password must be more then 7 characters");
    } else if (!validator.isEmail(email.current.value)) {
      setError("Enter Valid Email @example.com");
    } else {
      const UserDetials = {
        id: uuid(),
        email: email.current.value,
        password: password.current.value,
      };
      setUser([...user, UserDetials]);
      localStorage.setItem("login", true);
      setError(false);
      setlogin(true);
      navigate("Dashboard");
    }
  };
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(user));
  }, [user]);

  return (
    <div className="main-container">
      <FaUserCircle className="user-logo" />
      {error && <small className="worning">{error}</small>}
      <form onSubmit={handleSubmit}>
        <input type="text" ref={email} placeholder="Email" />
        <input type="password" placeholder="Password" ref={password} />
        <button>Login</button>
      </form>
      <p>Forgot password?</p>
      <p>Not a member? Sign up now</p>
    </div>
  );
};

export default Signin;
