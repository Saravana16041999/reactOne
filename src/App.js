import { useRef, useState } from "react";
import "./App.css";
import { FaUserCircle } from "react-icons/fa";
import { v4 as uuid } from "uuid";

function App() {
  const [user, setUser] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : []
  );
  const [error, setError] = useState(false);
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.current.value === "" || password.current.value === "") {
      setError(true);
    } else {
      const UserDetials = {
        id: uuid(),
        email: email.current.value,
        password: password.current.value,
      };
      setUser([...user, UserDetials]);
      localStorage.setItem("users", JSON.stringify(user));
    }
  };

  return (
    <div className="App">
      <div className="main-container">
        <FaUserCircle className="user-logo" />
        {error && (
          <small className="worning">Enter your email and Password</small>
        )}
        <form onSubmit={handleSubmit}>
          <input type="text" ref={email} placeholder="enter email" />
          <input type="password" placeholder="enter passsword" ref={password} />
          <button>Login</button>
        </form>
        <p>Forgot password?</p>
        <p>Not a member? Sign up now</p>
      </div>
    </div>
  );
}

export default App;
